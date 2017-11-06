import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AuthService } from 'ng4-social-login';
import { SocialUser } from 'ng4-social-login';




@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private fbUser: SocialUser;
  private loggedIn: boolean;

  constructor(
    private bookService: BooksService, private authService: AuthService) { }

 
  
  private user = {};

  private is_disabled = true;

  private isDisabled() : boolean{
    return this.is_disabled;
  }

  private editUserInfo() {
    this.is_disabled = false;
  }

  private saveEdit() {
    this.is_disabled = true;

    let userUpdate = {
      name: (<any>this).user.name,
      state: (<any>this).user.state,
      city: (<any>this).user.city
    }

    this.bookService.updateUserProfile(userUpdate);
  }

  private cancelEdit(){
    this.is_disabled = true;
  }
   


  ngOnInit() {

    this.bookService  //get my user info call
    .getUserInfo()
    .subscribe(
      (results) => {
        console.log(results);
        (<any>this).user.name = results["name"];
        (<any>this).user.city = results["city"];
        (<any>this).user.state = results["state"];
      }
    );

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    
  }

  

}

