import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-trades',
  templateUrl: './my-trades.component.html',
  styleUrls: ['./my-trades.component.css']
})
export class MyTradesComponent implements OnInit {

  constructor(private bookService: BooksService, private data: LoginService) { }

  private loggedInUser: object; 
  private results = [];
  private tradeRequests = [];
  private tradesRequested = [];
  private modalStyle = false;  // set the 'search' modal to not display onload
  private modalTwoStyle = false;
  private modalTradeInfo = {};  
  private modalTwoInfo = {};
  private tradeRequestApproved: string;
  private tradePending: string;
  private isApproved: string;
  

  private viewRequested(index){
    console.log(this.tradesRequested[index]);
  }

  private viewRequest(index){
    console.log(this.tradeRequests[index]);
    this.modalTradeInfo = this.tradeRequests[index];
    this.modalStyle = true;
    if(this.tradeRequests[index].tradePending == true){
      this.tradePending = "Trade status is pending. You need to approve/disapprove this trade."
    }
    if(this.tradeRequests[index].tradePending == false){
      if(this.tradeRequests[index].tradeApproved == true){
        this.tradePending = "You approved this trade.";
      }
      else{
        this.tradePending = "You did not approve this trade.";
      }
    }
  }

  private rejectTrade(){  //need to add code here to change TradePending to false for this tradesRequested
    let rejectTradeInfo = {
      id: (<any>this).modalTradeInfo.id,  //bookID
      tradeApproved: false,
      tradePending: false,
      tradeRequester: (<any>this).modalTradeInfo.tradeRequester,
      bookOwner: (<any>this).modalTradeInfo.bookOwner,
      bookDescription: (<any>this).modalTradeInfo.bookDescription,
      bookAuthors: (<any>this).modalTradeInfo.bookAuthors,
      bookTitle: (<any>this).modalTradeInfo.bookTitle,
      bookImages: (<any>this).modalTradeInfo.bookImages
    }

    this.bookService.rejectTrade(rejectTradeInfo);  // send reject trade info to server

    (<any>this).modalTradeInfo.tradePending = false;  
    this.tradePending = "You did not approve this trade.";

    for(let i = 0; i < this.tradeRequests.length; i++){  //update DOM reject trade info
      if(this.tradeRequests[i].id == (<any>this).modalTradeInfo.id ) {
        this.tradeRequests[i].tradePending = false;
      }
    }

  }

  private approveTrade(){  
    let approveTradeInfo = {
      id: (<any>this).modalTradeInfo.id,  //bookID
      tradeApproved: true,
      tradePending: false,
      tradeRequester: (<any>this).modalTradeInfo.tradeRequester,
      bookOwner: (<any>this).modalTradeInfo.bookOwner,
      bookDescription: (<any>this).modalTradeInfo.bookDescription,
      bookAuthors: (<any>this).modalTradeInfo.bookAuthors,
      bookTitle: (<any>this).modalTradeInfo.bookTitle,
      bookImages: (<any>this).modalTradeInfo.bookImages
    }

    this.bookService.approveTrade(approveTradeInfo);  // send approve trade info to server

    (<any>this).modalTradeInfo.tradePending = false;  
    this.tradePending = "You approved this trade.";

    for(let i = 0; i < this.tradeRequests.length; i++){  //update DOM approve trade info
      if(this.tradeRequests[i].id == (<any>this).modalTradeInfo.id ) {
        this.tradeRequests[i].tradePending = false;
        this.tradeRequests[i].tradeApproved = true;
      }
    }

  }

  private closeModal() {
    this.modalStyle = false;
  }


  private viewTradesRequested(index){
    console.log(this.tradesRequested[index]);
    this.modalTwoInfo = this.tradesRequested[index];
    this.modalTwoStyle = true;
    if(this.tradesRequested[index].tradePending == true){
      this.isApproved = "Trade status is pending. The book owner needs to review your request."
    }
    if(this.tradeRequests[index].tradePending == false){
      if(this.tradeRequests[index].tradeApproved == true){
        this.isApproved = "This trade request was approved.";
      }
      else{
        this.isApproved = "This trade request was not approved.";
      }
    }
  }

  private closeModalTwo() {
    this.modalTwoStyle = false;
  }

  private deleteRequest() {
    let deleteTradeInfo = {
      id: (<any>this).modalTwoInfo.id,  //bookID
      tradeRequester: (<any>this).modalTwoInfo.tradeRequester,
      bookOwner: (<any>this).modalTwoInfo.bookOwner,
      bookTitle: (<any>this).modalTwoInfo.bookTitle
    }

    this.bookService.deleteTrade(deleteTradeInfo);  // send reject trade info to server

    for(let i = 0; i < this.tradesRequested.length; i++){  //update DOM reject trade info
      if(this.tradesRequested[i].id == (<any>this).modalTwoInfo.id ) {
        this.tradesRequested.splice(i, 1);
      }
    }

    this.closeModalTwo();

  }



  ngOnInit() {

    this.data.currentMessage.subscribe(user => {
      this.loggedInUser = user;
      let lookup = {'fbId': (<any>this).loggedInUser.fbId};
          
      this.bookService
      .getMyBooks(lookup) //general use profile lookup
      .subscribe(
        (results) => {
          console.log(results);
          if(results.length > 0) {
            this.results = results[0];
            console.log("trade requests");
            this.tradeRequests = (<any>this).results.tradeRequests;
            this.tradesRequested = (<any>this).results.tradesRequested;
          }         
        }
      );  

    })
  }

}
