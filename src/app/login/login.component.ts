import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';

import { Headers, Http, Response } from '@angular/http';


declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private loggedIn: boolean;
  private userInfo: {};
  private user: string;
  private fbID: any;




  constructor(private bookService: BooksService, private loginSerivce : LoginService,  private http: Http) {

    //https://samkirkiles.svbtle.com/angular-4-facebook-login-integration
    //https://developers.facebook.com/docs/graph-api/reference/user

    
    // This function initializes the FB variable 
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    
    
        window.fbAsyncInit = () => {
    
            FB.init({
                appId            : '1773684832675608',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
            // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in
    
    // ** ADD CODE TO NEXT STEP HERE **

    FB.Event.subscribe('auth.statusChange', (res => {  //observable to check if the user signs in
                
                  if (res.status === 'connected') {
                      // use the response variable to get any information about the user and to see the tokens about the users session
                      console.log("connected!!"); 
  
                      
                      FB.api(
                        res.authResponse.userID,
                        'GET',
                        {},
                        (response) => {
                          
                            console.log(response.name);
                            this.loggedIn = true;
                      
                            let userInfo = {
                                name: response.name,
                                fbId: res.authResponse.userID
                             //   photoUrl: this.user.photoUrl
                              }

                            console.log(userInfo);
                              
                            
                             this.bookService.userLogin(this.userInfo); //move log in from bookService to loginService
                             this.loginSerivce.changeMessage(this.userInfo); //passes user info to other components
                              
                            }
                      );
                    }
              }));
        };
      }



  message: string = "logged out!";

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.message == 'logged out!' ? this.message = 'logged in!' : this.message = 'logged out!';
    this.messageEvent.emit(this.message);
  }

  
  ngOnInit() {

    if (window.FB) {
      window.FB.XFBML.parse();
    }

  }

}
