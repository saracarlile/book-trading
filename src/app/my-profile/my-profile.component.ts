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

  private loggedInUser: object; 
  private myProfileUser = {
    fbId: "",
    name: "",
    state: "",
    city: ""
  }
  private is_disabled = true;


  private isDisabled() : boolean {  // is input disabled on DOM?
    return this.is_disabled;
  }

  private editUserInfo() {  //edit user boxes
    this.is_disabled = false;
  }

  private saveEdit() {  //save edits
    this.is_disabled = true;

    let userUpdate = {
      fbId: (<any>this).myProfileUser.fbId,
      name: (<any>this).myProfileUser.name,
      state: (<any>this).myProfileUser.state,
      city: (<any>this).myProfileUser.city
    }
    this.bookService.updateUserProfile(userUpdate);
  }


  ngOnInit() {

    this.data.currentMessage.subscribe(user => {
      this.loggedInUser = user;
      console.log(this.loggedInUser);
      console.log((<any>this).loggedInUser.fbId);
      console.log((<any>this).loggedInUser.name)
      let lookup = {'fbId': (<any>this).loggedInUser.fbId};
      console.log(lookup.fbId);
    

      
      this.bookService  //get my myProfileUser info call
      .getUserInfo(lookup)
      .subscribe(
        (results: any) => {
          console.log(results);
          console.log(typeof(results));
          console.log(results.fbId);
          console.log(results.name);
          (<any>this).myProfileUser.fbId = results.fbId;
          (<any>this).myProfileUser.name = results.name;
          (<any>this).myProfileUser.city = results.city;
          (<any>this).myProfileUser.state = results.state;
        }
      );   

    })

  }  //end ngOnInit

  
  

}

