import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../login.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here






@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


  constructor(
    private bookService: BooksService, private data: LoginService) { }


  message:object;
  private myProfileUser = {};
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
      fbId: (<any>this).myProfileUser.fbId,
      name: (<any>this).myProfileUser.name,
      state: (<any>this).myProfileUser.state,
      city: (<any>this).myProfileUser.city
    }

    this.bookService.updateUserProfile(userUpdate);
  }

  private cancelEdit(){
    this.is_disabled = true;
  }

  newMessage() {
    this.data.changeMessage({test: "Hello from Sibling"});
  }
   


  ngOnInit() {

    this.bookService  //get my myProfileUser info call
    .getUserInfo()
    .subscribe(
      (results) => {
        console.log(results);
        (<any>this).myProfileUser.name = results["name"];
        (<any>this).myProfileUser.city = results["city"];
        (<any>this).myProfileUser.state = results["state"];
        (<any>this).myProfileUser.fbId = results["fbId"];
      }
    );
    
    this.data.currentMessage.subscribe(message => {
    this.message = message
    console.log(message);
    })

  }

  
  

}

