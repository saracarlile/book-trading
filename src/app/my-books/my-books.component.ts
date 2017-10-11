import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

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
