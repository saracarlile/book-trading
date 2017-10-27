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

  private results = <any>[];
  private allBooks = [];

  constructor(
    private bookService: BooksService) { }


  ngOnInit(): void {

  
    this.bookService
      .getAllBooks()
      .subscribe(
      (result) => {
        console.log(result);
      
        this.results = result;
        for(let i = 0; i < this.results.length; i++ ){  
          for(let j = 0; j < (<any>this).results[i].books.length; j++){
            console.log((<any>this).results[i].books[j]);
            let currentBookObject = (<any>this).results[i].books[j];
            console.log((<any>this).results[i].name);
            currentBookObject.name = (<any>this).results[i].name;
            this.allBooks.push(currentBookObject);
          }
        }
      }
      );
  }

}
