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
    console.log('app component! ' + this.message);
    if (this.message === 'logged in!') {
      this.LoggedIn = true;
    }
    if (this.message === 'logged out!') {
      this.LoggedIn = false;
    }

    console.log(this.LoggedIn + ' this.LoggedIn app component');
 
  }



}
