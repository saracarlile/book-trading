import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  message:string;
  public LoggedIn = false;

  receiveMessage($event) {
    this.message = $event;

    if (this.message === 'logged in!') {
      this.LoggedIn = true;
    }
    if (this.message === 'logged out!') {
      this.LoggedIn = false;
    }

  }



}
