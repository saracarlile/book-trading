import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here




@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user = {
    name: "Dave", 
    city: "Dallas",
    state: "Texas"
  }

  is_disabled = true;

  private isDisabled() : boolean{
    return this.is_disabled;
  }

  private editUserInfo() {
    console.log("Test edit");
    this.is_disabled = false;
  }

  private saveEdit() {
    this.is_disabled = true;
  }

  private cancelEdit(){
    this.is_disabled = true;
  }

  /*

  edit(value){
    this.preValue = value;  // Store original value in case the form is cancelled
    this.editing = true;
  }

  */
 



  constructor(
    private bookService: BooksService) { }

   


  ngOnInit() {

    this.bookService  //get my user info call
    .getUserInfo()
    .subscribe(
      (results) => {
        console.log(results);
        this.user.name = results["name"];
      }
    );
    
  }

}

