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
  
    searchForBook() {
      this.bookService.searchForBook().subscribe(result => {   
        this.userinfo= result,
        console.log(this.userinfo);
      });
    }

    modalStyle = false;
    
    updatemodalStyle() { 
      this.modalStyle = !this.modalStyle;
      console.log(this.modalStyle);
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
