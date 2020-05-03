import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm= new FormGroup({
    name:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
   })
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  submitSignup(value){
    console.log(value);
    let users:any=[];
    let user =localStorage.getItem('user');
    
    if(user){
      users=JSON.parse(user);
    }
    
    users.push(value);

    localStorage.setItem('user',JSON.stringify(users));
    this.router.navigateByUrl('pages/login')

  }
}
