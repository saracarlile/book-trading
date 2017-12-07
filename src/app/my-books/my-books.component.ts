import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})

export class MyBooksComponent implements OnInit {

  constructor(
    private bookService: BooksService, private data: LoginService) { }

  private myBooks: {};
  private userinfo = [];
  private bookSearch = [];
  private bookInfo = '';
  private search = '';  //input box search variable
  private forkJoinStream = [];  // results of bookService.searchForUser and bookService.searchGoogleBooks
  private message = '';  //error message variable
  private encodedSearch = '';  //url encoded search
  private modalStyle = false;  // set the 'search' modal to not display onload
  private modalDetailStyle = false; // modal for 'View Details' of my books
  private showShortDescription = true; //show short description of books by default
  private modalDetailBook = {}; //object to hold book in detail modal view
  private myLibraryUser = '';  //tracks the user for My Library
  private loggedInUser: object; 


  private LookupUserInfoAddBook() {  //obtain book search and user info in one combined result
    this.message = '';  //input/search cannot be blank
    if(this.search === ''){
      this.message = 'You must enter a search term';
      return;
    }
    this.encodedSearch = encodeURIComponent(this.search);  //search must by URI encoded to send to API
    
    let user = this.bookService.searchForUser({'fbId': (<any>this).loggedInUser.fbId});  // returns an observable
    let bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch);  //returns an observable
    
    Observable.forkJoin([user, bookResult]).subscribe(res => {
      this.forkJoinStream = res;
   //   console.log(this.forkJoinStream);
    });
  }


  private addToMyBooks(i) {
    if(this.forkJoinStream[1].items[i].volumeInfo.imageLinks != undefined){
      let thumbnail = this.forkJoinStream[1].items[i].volumeInfo.imageLinks.thumbnail;
      let https =  thumbnail.replace("http:", "https:");
      let smallThumbnail = this.forkJoinStream[1].items[i].volumeInfo.imageLinkssmallThumbnail;
      let https2 =  thumbnail.replace("http:", "https:");
      var fixedLinks = {
        thumbnail: https,
        smallThumbnail: https2
      }
    }

    let bookInfo = {
      fbId: this.forkJoinStream[0].fbId,
      userName: this.forkJoinStream[0].name,
      userBooks: this.forkJoinStream[0].books,
      bookId: this.forkJoinStream[1].items[i].id,
      bookTitle: this.forkJoinStream[1].items[i].volumeInfo.title,
      bookAuthors: this.forkJoinStream[1].items[i].volumeInfo.authors,
     // bookImages: this.forkJoinStream[1].items[i].volumeInfo.imageLinks,
      bookImages: fixedLinks,
      bookDescription: this.forkJoinStream[1].items[i].volumeInfo.description,
    }
   
    let idsOfUserBooks= this.forkJoinStream[0].books.map(function(item) { return item["id"]; });


    if(idsOfUserBooks.includes(this.forkJoinStream[1].items[i].id)) {
      this.message = this.forkJoinStream[1].items[i].volumeInfo.title + " is already in your library!";
      this.modalStyle = false;
      return;
    }

    this.bookService.addToMyBooks(bookInfo);
    
    this.modalStyle = false; // close modal 

    this.bookService  //get my books call (update with book added)
    .getMyBooks( {'fbId': (<any>this).loggedInUser.fbId})
    .subscribe(
      (books) => {
        this.myBooks = books[0];
      }
    );
  }

  private removeFromLibrary() {
    //build an object to send as response body

    let bookInfo = {
      userName: this.myLibraryUser,
      userBooks: (<any>this).modalDetailBook.userBooks,
      bookId: (<any>this).modalDetailBook.id,
      bookTitle: (<any>this).modalDetailBook.bookTitle,
      bookAuthors: (<any>this).modalDetailBook.bookAuthors,
      bookImages: (<any>this).modalDetailBook.bookImages,
      bookDescription: (<any>this).modalDetailBook.bookDescription
    }

    this.bookService.deleteFromMyBooks(bookInfo);

    this.bookService  //get my books call (update with book deleted)
    .getMyBooks( {'fbId': (<any>this).loggedInUser.fbId})
    .subscribe(
      (books) => {
        this.myBooks = books[0];
      }
    );
  }

    
    
  private updatemodalStyle() { 
    this.message = '';  //input/search cannot be blank
    if(this.search === ''){
      this.message = 'You must enter a search term';
      return;
    } 
    this.modalStyle = !this.modalStyle;  //toggle modal display block and none
  }

  private showFullDescription() {  //show full description of book in Modal
    this.showShortDescription = !this.showShortDescription;
  }



  private modalDetailView(i) {
    this.modalDetailStyle = !this.modalDetailStyle;

    if(this.modalDetailStyle == true){

      this.modalDetailBook = (<any>this).myBooks.books[i];  //username not included in myBooks
      this.myLibraryUser = (<any>this).myBooks.name;

    }
  }

    
  
  ngOnInit(): void {

    this.data.currentMessage.subscribe(user => {
      this.loggedInUser = user;
      let lookup = {'fbId': (<any>this).loggedInUser.fbId};
          
      this.bookService
      .getMyBooks(lookup)
      .subscribe(
        (books) => {
          if(books.length === 0){  // if user has no books in library return
            return;
          }
          this.myBooks = books[0];

        }
      );  

    })

    
  }

}
