import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  message:string;
  private isLoggedIn = false;

  receiveMessage($event) {
    this.message = $event;
    console.log('app component!');
    if (this.message === 'logged in!') {
      this.isLoggedIn = true;
    }
    if (this.message === 'logged out!') {
      this.isLoggedIn = false;
    }

    
 
  }



}
