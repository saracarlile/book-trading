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

  private books: any[];
  private userinfo = [];
  private bookSearch = [];
  private bookInfo = '';
  private search = '';  //input box search variable
  private user = new Observable<any>();  //user from DB observable
  private bookResult = new Observable<any>(); //google books reslt api observable
  private results = {  //combined user results from DB and google books API object
    dbUserInfo: [],
    gbBookInfo: []
  }
  private message = '';  //error message variable
  private encodedSearch = '';  //url encoded search
  private modalStyle = false;  // set the 'search' modal to not display onload
  private showShortDescription = true; //show short description of books by default




 
  searchForBookk() {
    this.bookService.searchForBook().subscribe(result => {   
      this.userinfo= result,
      console.log(this.userinfo);
    });
  }

  LookupUserInfoAddBook() {
    this.message = '';
    if(this.search === ''){
      this.message = 'You must enter a search term';
      return;
    }
    this.encodedSearch = encodeURIComponent(this.search);
    this.user = this.bookService.searchForUser();
    console.log(this.user + " USER INFO");
    this.bookResult = this.bookService.searchGoogleBooks('https://www.googleapis.com/books/v1/volumes?q=' + this.encodedSearch);
    console.log(this.bookResult + " BOOK RESULT");

    Observable.forkJoin([this.user, this.bookResult]).subscribe(results => {
      // results[0] is our character
      // results[1] is our character homeworld
      results[0].dbUserInfo = results[0];
      results[1].gbBookInfo = results[1];
      console.log(results + " RESULTS");
      console.log(results[1]["items"]);
      this.bookSearch = results[1]["items"];
    });
  }


    searchForBook() {
      this.bookService.searchForBook().subscribe(result => {   
        this.userinfo= result,
        console.log(this.userinfo);
      });
    }

    addToMyBooks() {
      console.log("ADD to my books");
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

    constructor(
      private bookService: BooksService) { }
  
  
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
