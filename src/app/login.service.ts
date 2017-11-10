import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }
        changeMessage(message: object) {
      this.messageSource.next(message)
    }

    private messageSource = new BehaviorSubject<object>({test: "default message"});

    public userLogin(userInfo) {  //user login
        const body = userInfo;
        const req = this.http.post('/api/user-login', body);
        req.subscribe(getResponse => {
        console.log(getResponse);
        this.changeMessage(getResponse);
        });
      }

  
  
  currentMessage = this.messageSource.asObservable();
 
  

}