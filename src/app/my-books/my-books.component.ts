import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
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
    private bookService: BooksService) { }

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


  private LookupUserInfoAddBook() {  //obtain book search and user info in one combined result
    this.message = '';  //input/search cannot be blank
    if(this.search === ''){
      this.message = 'You must enter a search term';
      return;
    }
    this.encodedSearch = encodeURIComponent(this.search);  //search must by URI encoded to send to API
    
    let user = this.bookService.searchForUser();  // returns an observable
    let bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch);  //returns an observable
    
    Observable.forkJoin([user, bookResult]).subscribe(res => {
      this.forkJoinStream = res;
      console.log(this.forkJoinStream);
    });
  }


  private addToMyBooks(i) {
    let bookInfo = {
      userName: this.forkJoinStream[0].name,
      userBooks: this.forkJoinStream[0].books,
      bookId: this.forkJoinStream[1].items[i].id,
      bookTitle: this.forkJoinStream[1].items[i].volumeInfo.title,
      bookAuthors: this.forkJoinStream[1].items[i].volumeInfo.authors,
      bookImages: this.forkJoinStream[1].items[i].volumeInfo.imageLinks,
      bookDescription: this.forkJoinStream[1].items[i].volumeInfo.description
    }
   
    

    let idsOfUserBooks= this.forkJoinStream[0].books.map(function(item) { return item["id"]; });
    console.log(idsOfUserBooks);

    if(idsOfUserBooks.includes(this.forkJoinStream[1].items[i].id)) {
      this.message = this.forkJoinStream[1].items[i].volumeInfo.title + " is already in your library!";
      this.modalStyle = false;
      return;
    }

    this.bookService.addToMyBooks(bookInfo);
    
    this.modalStyle = false; // close modal 

    this.bookService  //get my books call (update with book added)
    .getMyBooks()
    .subscribe(
      (books) => {
        this.myBooks = books[0];
        console.log(this.myBooks);
        console.log((<any>this).myBooks.books);

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

      this.modalDetailBook = (<any>this).myBooks.books[i];
      console.log(this.modalDetailBook);


    }
  }

    
  
  ngOnInit(): void {

    this.bookService
      .getMyBooks()
      .subscribe(
        (books) => {
          if(books.length === 0){  // if user has no books in library return
            return;
          }
          this.myBooks = books[0];
          console.log(this.myBooks);
          console.log((<any>this).myBooks.books);

        }
      );
  }

}
