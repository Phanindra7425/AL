import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidator } from '../validators/form-validator';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent{

  constructor(private authoriser:AngularFireAuth, private router:Router, private userService:DbserviceService){

  }
  errorMsg: any;
  hide = false;
  form = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email,FormValidator.emailValidator]),
    password:new FormControl('',[Validators.required,Validators.maxLength(16),FormValidator.passwordValidator]),
    keepmeSignedIn: new FormControl('true'),
  })

  getErrorMessage(){

    if(this.username?.hasError('required')){
      return '*Email address is required';
    }
    else if(this.username?.hasError('email')){
      return '*Please enter a valid email address';
    }
    return this.username?.hasError('cannotContainSpacesInEmail')?'*Cannot contain spaces in middle': '';
  }
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  SignIn(cred:any){
    if(cred){
      let email = cred.value.username as string;
      let pswd = cred.value.password as string;
      this.authoriser.signInWithEmailAndPassword(email,pswd).then((response)=>{
        if(response.user){
          this.userService.save(response.user);
          this.router.navigate(['/']);
        }
      }).catch((err)=>{
        console.log(err);
        this.clear()
        switch(err.code){
          case 'auth/invalid-email':
            this.errorMsg = "*Please enter all required fields";
            break;
          case 'auth/wrong-password':
            this.errorMsg = "*The password is invalid";
            break;
          case 'auth/user-not-found':
            this.errorMsg = "*There is no user present Please register first";
            break;
          default:
            this.errorMsg = "*Invalid Credentails";
            break;
        }
      })
    }
  }

  private clear(){
    this.form.setValue({
      username:'',
      password:'',
      keepmeSignedIn: true
    });
  }
  log(x:any){console.log(x)};



}
