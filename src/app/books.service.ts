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

  constructor(private http: Http) { } // this will work now without any error

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

  
  public searchForUser(): Observable<any[]> {
    return this.http
    .get('/api/add-book')
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this.handleError);
  }

  public getMyBooks(): Observable<any[]> {  //get all books in my library
    return this.http
    .get('/api/my-books')
    .map(response => {
      const resp = response.json();
      console.log(resp);
      return resp;
    })
    .catch(this.handleError);
  }


  public searchGoogleBooks(url): Observable<any[]> {
    return this.http
    .get(url)
    .map(response => {
      const resp = response.json();
      return resp;
    })
    .catch(this.handleError);
  }

  public getUserInfo(): Observable<any[]> {
    return this.http
    .get('/api/get-user')
    .map(response => {
      const resp = response.json();
      return resp;
    })
    .catch(this.handleError);
  }



  private handleError (error: Response | any) {
    console.error('BooksService::handleError', error);
    return Observable.throw(error);
  }

}
