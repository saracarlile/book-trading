import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';
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
  private loggedInUser: object;
  private isMyBook: boolean;
  private tradeResults = {};
  private message: string;

  constructor(
    private bookService: BooksService, private data: LoginService) { }


   private viewBook(index) {
     this.message = "";
     console.log(this.allBooks[index]);
     this.modalStyle = true;
     this.modalBook = this.allBooks[index];

     if((<any>this).modalBook.name == (<any>this).loggedInUser.name){
      this.isMyBook = true;
    }
    else {
      this.isMyBook = false;
    }
    
   } 

   

   private requestTrade() {
    console.log(this.modalBook);
    let tradeInfo = {
      bookId: (<any>this).modalBook.id,
      bookTitle: (<any>this).modalBook.bookTitle,
      bookAuthors: (<any>this).modalBook.bookAuthors,
      bookDescription: (<any>this).modalBook.bookDescription,
      bookImages: (<any>this).modalBook.bookImages,
      bookOwner: (<any>this).modalBook.name, 
      tradeRequester: (<any>this).loggedInUser.name, 
      fbId: (<any>this).loggedInUser.fbId
    }

    
    this.bookService
    .checkTrade(tradeInfo)
    .subscribe(
    (result) => {
      console.log(result);
      this.tradeResults = result;
      this.message = "";
      
      let trades = JSON.parse((<any>this).tradeResults._body);
      console.log(trades)
      let hasRequested = false;
      console.log(trades[0].tradesRequested);
      if (trades[0].tradesRequested.length > 0) {  //if user has requested trades
        for (let i = 0; i < trades[0].tradesRequested.length; i++) {
          if (trades[0].tradesRequested[i].id === tradeInfo.bookId) {
            hasRequested = true;
          }
        }
      }
      console.log(hasRequested);
      if( hasRequested == false){
        this.bookService.requestTrade(tradeInfo);  //if they haven't requested to trade book before, send to trade request
      }
      else {
        this.message = "You've requested this trade before!";
      }

      }
    );

  
    


    

   }

   private closeModal() {
    this.modalStyle = false;
    console.log("clicked closeMOdal!!");
   }


  ngOnInit(): void {

    this.data.currentMessage.subscribe(user => {
      this.loggedInUser = user;
      console.log(this.loggedInUser);
    })

  
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
