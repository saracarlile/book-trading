import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books: any[];
  userinfo = [];
  search = '';
  user = new Observable<any>();
  bookResult = new Observable<any>();
  bookInfo = '';
  results = {
    dbUserInfo: [],
    gbBookInfo: []
  }
  message = '';
  encodedSearch = '';
 
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

    });
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
