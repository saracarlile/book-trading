import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';


import { 
  AuthService,
  FacebookLoginProvider
} from 'ng4-social-login';

import { SocialUser } from 'ng4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  private userInfo: {};


  constructor(private authService: AuthService, private bookService: BooksService, private loginSerivce : LoginService) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

 
  signOut(): void {
    this.sendMessage();
    this.authService.signOut();
  }
  
  message: string = "logged out!";

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.message == 'logged out!' ? this.message = 'logged in!' : this.message = 'logged out!';
    console.log(this.message);
    this.messageEvent.emit(this.message);
  }

  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

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
        
     //   this.bookService.userLogin(this.userInfo); //move log in from bookService to loginService
        this.loginSerivce.userLogin(test);  //saves user to DB if doesn't exist
        this.loginSerivce.changeMessage(this.userInfo); //passes user info to other components
        
      }

      
      
    });
  }

}
