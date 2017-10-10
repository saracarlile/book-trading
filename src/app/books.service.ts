import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { User } from './user';


@Injectable()
export class BooksService {

  private GoogleBooksAPIUrl = 'https://www.googleapis.com/books/v1/volumes?q=quilting';  // URL to web api

  constructor(private http: Http) { } // this will work now without any error

  books = [{ author: "Sam", title: "first book" }, { author: "cindy", title: "second book" }];  
  //example JSON not used

  getAllBooks(): Observable<any[]> {
    return this.http
    .get(this.GoogleBooksAPIUrl)
    .map(response => {
      const resp = response.json();
      console.log(resp.items);
      return resp.items;
    })
    .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    console.error('BooksService::handleError', error);
    return Observable.throw(error);
  }

}
