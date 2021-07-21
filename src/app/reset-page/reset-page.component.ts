import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormValidator } from '../validators/form-validator';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent{

  form: FormGroup;
  constructor(fb:FormBuilder,private router:Router,private authoriser:AngularFireAuth){
    this.form = fb.group({
      emailaddress: ['',[Validators.required,Validators.email,FormValidator.emailValidator]],
      newpassword: ['',Validators.required],
      confirmpassword: ['',Validators.required]
    });
  }


  get emailaddress(){
    return this.form.get('emailaddress');
  }

  get newpassword(){
    return this.form.get('newpassword');
  }

  get confirmpassword(){
    return this.form.get('confirmpassword');
  }

  submit(newpassword:any,confirmpassword:any){
    FormValidator.passwordMatchValidator(newpassword,confirmpassword)
      .then((res:any)=> {
          if(res){
            this.form.setErrors({
              passwordMatchValidator: res.passwordMatchValidator
            })
            this.form.setValue({emailaddress:'',newpassword:'',confirmpassword:''});
          }
          else{
           
          }
            
        });
    
  }



}
