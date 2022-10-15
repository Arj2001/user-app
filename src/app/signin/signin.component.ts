import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myRoute:Router) { }

  userName = ""
  password = ""

  getValues=()=>{
    let data = {
      "userName":this.userName,
      "password":this.password,
    }
    console.log(data)
    if (this.userName == "admin" && this.password=="12345") {
      this.myRoute.navigate(["/dashboard"])
    } else {
      alert("Invalid credtionals")
    }
    this.userName = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}
