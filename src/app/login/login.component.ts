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

    FB.Event.subscribe('auth.statusChange', (response => {  //observable to check if the user signs in
                  console.log(response);
                  console.log(response.authResponse.userID);

                  FB.api(
                    response.authResponse.userID,
                    'GET',
                    {},
                    function(response) {
                        // Insert your code here
                        console.log("did i get in here?!");
                        console.log(response);
                    }
                  );
      
                  if (response.status === 'connected') {
                      // use the response variable to get any information about the user and to see the tokens about the users session
                      console.log("connected!!");
                      console.log(response);
                      console.log(response.authResponse.userID);               
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




    /*
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if(user != null) {
        this.userInfo = {
          name: this.user.name,
          fbId: this.user.id,
          photoUrl: this.user.photoUrl
        }

        let test = {
          name: this.user.name,
          fbId: this.user.id,
          photoUrl: this.user.photoUrl
        }
        
       this.bookService.userLogin(this.userInfo); //move log in from bookService to loginService
        this.loginSerivce.userLogin(test);  //saves user to DB if doesn't exist
        this.loginSerivce.changeMessage(this.userInfo); //passes user info to other components
        
      }

      
    });

      */
  }

}
