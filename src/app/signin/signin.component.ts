import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  userName = ""
  password = ""

  getValues=()=>{
    let data = {
      "userName":this.userName,
      "password":this.password,
    }
    console.log(data)
    this.userName = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}
