import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {



  constructor() {
   }

  title = 'My Profile Title';

  titleStyle = false;

  updatetitleStyle() { 
    this.titleStyle = !this.titleStyle;
    console.log(this.titleStyle);
  }

  ngOnInit() {
    
  }

}

