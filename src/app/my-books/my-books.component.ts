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


  private books: any[];
  private userinfo = [];
  private bookSearch = [];
  private bookInfo = '';
  private search = '';  //input box search variable
  //private user = new Observable<any>();  //user from DB observable
//  private bookResult = new Observable<any>(); //google books reslt api observable
  private results = {  //combined user results from DB and google books API object
    dbUserInfo: [],
    gbBookInfo: []
  }
  private forkJoinStream = [];
  private message = '';  //error message variable
  private encodedSearch = '';  //url encoded search
  private modalStyle = false;  // set the 'search' modal to not display onload
  private showShortDescription = true; //show short description of books by default




  LookupUserInfoAddBook() {
    this.message = '';
    if(this.search === ''){
      this.message = 'You must enter a search term';
      return;
    }
    this.encodedSearch = encodeURIComponent(this.search);
    
    let user = this.bookService.searchForUser();  // returns an observable
    let bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch);  //returns an observable
    
    console.log(bookResult + " BOOK RESULT");
    console.log(user + " USER INFO");

    Observable.forkJoin([user, bookResult]).subscribe(res => {
      this.forkJoinStream = res;
      console.log(this.forkJoinStream);
    });
    
  }


    addToMyBooks(i) {
      console.log("ADD to my books");
      console.log(this.results);
      console.log(this.bookSearch[i].title);
      console.log(this.bookSearch[i].description);
    }

    
    
    updatemodalStyle() { 
      this.message = '';
      if(this.search === ''){
        this.message = 'You must enter a search term';
        return;
      } 
      this.modalStyle = !this.modalStyle;  //toggle modal display block and none
    }

    showFullDescription() {
      this.showShortDescription = !this.showShortDescription;
    }

    
  
    ngOnInit(): void {
  
      this.bookService
        .getAllBooks()
        .subscribe(
        (books) => {
          this.books = books;
        }
        );
    }

}
