import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule } from '@angular/forms';
import { FormValidator } from '../validators/form-validator';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {

  constructor(private authoriser:AngularFireAuth,private router:Router){

  }
  enable = false;
  errorMsg: any;
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

  Register(details: any){
    console.log(details);
    let fname = details.value.firstname as string;
    let lname = details.value.lastname as string;
    let email = details.value.username as string;
    let pswd  = details.value.password as string;
    if( fname&&lname&&email&&pswd ){
      this.authoriser.createUserWithEmailAndPassword(email,pswd).then((res)=>{
        if(res){
          console.log(res);
          this.authoriser.currentUser.then((user)=>{
            if(user){
              user.updateProfile({
                displayName : fname + lname
              }).then(()=>{
                //update successfull
              }).catch((err)=>{
                //update failed
              })
            }
          });
        }
      }).catch((err)=>{
        console.log(err);
        switch(err.code){
          case 'auth/email-already-in-use':
            this.errorMsg = "*Email is already in use by another account";
            break;
          default:
            this.errorMsg = "*Invalid Credentails";
            break;
        }
        this.clear();

      })
    }
    else{
      this.clear();
      this.form.setErrors({
        invalidLogin:true
      })
      
    }
    
  }

  private clear(){
    this.form.setValue({
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      keepmeSignedIn: true
    });
  }
}
