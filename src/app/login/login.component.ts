import { Component, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';
import 'rxjs/Rx';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

import { Headers, Http, Response } from '@angular/http';


declare var window: any;
declare var FB: any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  private userInfo: {};
  private user: string;
  private fbID: any;
  message: string = "logged out!";
  public isLoggedIn = false;





  constructor(private bookService: BooksService, private loginSerivce : LoginService,  private http: Http, private renderer: Renderer2) {

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
                
                      FB.api(
                        res.authResponse.userID,
                        'GET',
                        {},
                        (response) => {
                          
               
                            let userInfo = {
                                name: response.name,
                                fbId: res.authResponse.userID
                             //   photoUrl: this.user.photoUrl
                              }

                              
                             this.isLoggedIn = true;
                             this.bookService.userLogin(userInfo); //move log in from bookService to loginService
                             this.loginSerivce.changeMessage(userInfo); //passes user info to other component

                             //jquery works!
                            /* var objiframe=$('#test').find('iframe');
                             var test = $(objiframe).contents().find("._5h0o");
                             test.text('You have logged in');  *///use jquery to add 'hidden' button then simulate click event????

                             $("#btn").trigger("click");

                             /*
                             Option 1: $("#link").trigger("click")

                             Option 2: $("#link").click()
                            */
                             

                              
                            }
                      );
                    }
              }));
        };

       

      }


  @Output() messageEvent = new EventEmitter<string>();

  sendMessage = () => {

    this.message == 'logged out!' ? this.message = 'logged in!' : this.message = 'logged out!';
    this.messageEvent.emit(this.message);

    if(this.message === 'logged out!'){
      this.isLoggedIn = false
    }
    if(this.message === 'logged in!'){
      this.isLoggedIn = true;
    }

    
 
  }

  signOut(): void {
    this.sendMessage();
    FB.logout(function(response) {
      // user is now logged out
      console.log(response);
    });
    window.location.reload(); //hopefully adds FB button back with page reload
  }

  

  
  ngOnInit() {

    if (window.FB) {
      window.FB.XFBML.parse();
    }

    let global = this.renderer.listen('document', 'click', (evt) => {
      
    })
    //global(); 

  }

}
