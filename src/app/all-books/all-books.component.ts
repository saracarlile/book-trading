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
  private modalStyle = false;  //modal style set to 'display: none' on page load
  private modalBook = {};


  constructor(
    private bookService: BooksService) { }


   private viewBook(index) {
     console.log(this.allBooks[index]);
     this.modalStyle = true;
     this.modalBook = this.allBooks[index];
     console.log((<any>this).modalBook.bookImages.thumbnail);
   } 

   private closeModal() {
    this.modalStyle = false;
    console.log("clicked closeMOdal!!");
   }


  ngOnInit(): void {

  
    this.bookService
      .getAllBooks()
      .subscribe(
      (result) => {
        console.log(result);
      
        this.results = result;
        for(let i = 0; i < this.results.length; i++ ){  
          for(let j = 0; j < (<any>this).results[i].books.length; j++){
            let currentBookObject = (<any>this).results[i].books[j];
            currentBookObject.name = (<any>this).results[i].name;  //build one object for DOM that contains book and user name
            this.allBooks.push(currentBookObject);   //add each book plus user name to allBooks array, which is used to build all books view
          }
        }
      }
      );
  }

}
