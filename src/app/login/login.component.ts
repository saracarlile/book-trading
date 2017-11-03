import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  private user: SocialUser;
  private loggedIn: boolean;
  
   signInWithFB(): void {
     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
   }
  
   signOut(): void {
     this.authService.signOut();
   }

  
  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
