import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  books: any[];

  userinfo = [];

  addBook() {
    this.bookService.addBook().subscribe(result => {   
      this.userinfo= result,
      console.log(this.userinfo);
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
