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
