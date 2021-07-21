import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import { FormValidator } from '../validators/form-validator';


@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {

  enable = false;
  form = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    username:new FormControl('',[Validators.required,Validators.email,FormValidator.emailValidator]),
    password:new FormControl('',[Validators.required,Validators.maxLength(16),FormValidator.passwordValidator]),
    keepmeSignedIn: new FormControl('true')
  })

  get firstname(){
    return this.form.get('firstname');
  }

  get lastname(){
    return this.form.get('lastname');
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  enabled(){
    this.enable = true;
  }

  Register(){
    this.form.setErrors({
      invalidLogin:true
    })
  }
}
