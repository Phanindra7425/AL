import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidator } from '../validators/form-validator';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent{

  enable = false;
  form = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email,FormValidator.emailValidator]),
    password:new FormControl('',[Validators.required,Validators.maxLength(16),FormValidator.passwordValidator]),
    keepmeSignedIn: new FormControl('true'),
  })

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  enabled(){
    this.enable = true;
  }
  log(x:any){console.log(x)};

}
