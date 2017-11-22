import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';



import { User } from './user';


@Injectable()
export class BooksService {

  constructor(private http: Http) { } 

  public getAllBooks(): Observable<any[]> {  //get all books for all users
    return this.http
    .get('/api/all-books')
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this.handleError);
  }


  public addToMyBooks(bookInfo) {  //add book to my library
    const body = bookInfo;
    const req = this.http.post('/api/add-to-my-books', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public deleteFromMyBooks(bookInfo) {  //delete book from library
    const body = bookInfo;
    const req = this.http.post('/api/delete-from-my-books', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public searchForBook(): Observable<any[]> {
    return this.http
    .get('/api/add-book')
    .map(response => {
      if(response !== null){  // this code is added for testing purposes if user doesn't exist
        const resp = response.json();
        console.log(resp);
        return resp;
      }
      return response;  /// this code is added for testing purposes if user doesn't exist
    })
    .catch(this.handleError);
  }

  
  public searchForUser(userInfo): Observable<any[]> {
    const body = userInfo;
    return this.http
    .post('/api/add-book', body)
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this.handleError);
  }

  public getMyBooks(userInfo): Observable<any[]> {  //get all books in my library
    const body = userInfo;
    return this.http
    .post('/api/my-books', body)
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this.handleError);
  }


  public searchGoogleBooks(url): Observable<any[]> {  //search google books api
    return this.http
    .get(url)
    .map(response => {
      const resp = response.json();
      return resp;
    })
    .catch(this.handleError);
  }

  public getUserInfo(userInfo): Observable<any[]> {
    const body = userInfo;
    return this.http
    .post('/api/get-user', body)  //can't figure out how to send params with get request in Angular 4?? so using post
    .map(response => {
      const resp = response.json();
      return resp;
    })
    .catch(this.handleError);
  }

  public updateUserProfile(userInfo) {  //add book to my library
    const body = userInfo;
    const req = this.http.post('/api/update-user-info', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public userLogin(userInfo) {  //user login
    const body = userInfo;
    const req = this.http.post('/api/user-login', body);
    req.subscribe(getResponse => console.log(getResponse));
  }



  public checkTrade(tradeInfo): Observable<any[]> {  //needs to be observable to "return" to  all books component?
    const body = tradeInfo;
    return this.http
    .post('/api/check-trade', body)
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return response;
    })
    .catch(this.handleError);
  }





  public requestTrade(tradeInfo) {  
    const body = tradeInfo;
    const req = this.http.post('/api/request-trade', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public rejectTrade(tradeInfo) {
    const body = tradeInfo;
    const req = this.http.post('/api/reject-trade', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public approveTrade(tradeInfo) {
    const body = tradeInfo;
    const req = this.http.post('/api/approve-trade', body);
    req.subscribe(getResponse => console.log(getResponse));
  }

  public deleteTrade(tradeInfo) {
    const body = tradeInfo;
    const req = this.http.post('/api/delete-trade', body);
    req.subscribe(getResponse => console.log(getResponse));
  }



  private handleError (error: Response | any) {
    console.error('BooksService::handleError', error);
    return Observable.throw(error);
  }

}
