import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here




@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private bookService: BooksService) { }

 
  
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
    
  }

}

