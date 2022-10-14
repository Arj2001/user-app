import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name = ""
  phone = ""
  gender = ""
  email = ""
  address = ""
  pincode = ""
  bloodGroup = ""
  dateOfBirth = ""
  parentName = ""
  age = ""
  password = ""
  confirmPassword = ""

  getValues=()=>{
    let data = {
      "name":this.name,
      "phone":this.phone,
      "gender":this.gender,
      "email":this.email,
      "address":this.address,
      "pincode":this.pincode,
      "bloodGroup":this.bloodGroup,
      "dateOfBirth":this.dateOfBirth,
      "parentName":this.parentName,
      "age":this.age,
      "password":this.password,
      "confirmPassword":this.confirmPassword,
    }
    console.log(data)
    this.name = ""
    this.phone = ""
    this.gender = ""
    this.email = ""
    this.address = ""
    this.pincode = ""
    this.bloodGroup = ""
    this.dateOfBirth = ""
    this.parentName = ""
    this.age = ""
    this.password = ""
    this.confirmPassword = ""
    
  }

  ngOnInit(): void {
  }

}
