import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations:[
    trigger('fade',[
      transition('void=> *',[
        style({ opacity: 0}),
        animate(2000)
      ]),

      transition('*=>void',[
        animate(2000,style({opacity: 0}))
      ])
    ])
  ]
})
export class SignInComponent {

  constructor(private authoriser:AngularFireAuth, private router:Router, private userService:DbserviceService){

  }

  gSignIn(){
    
    let provider = new firebase.auth.GoogleAuthProvider();
    this.authoriser.signInWithPopup(provider).then((response)=>{
      if(response.user){
        this.userService.save(response.user);
        this.router.navigate(['/']);
      }

    }).catch((error)=>{
      var errorMessage = error.message;
      var email = error.email;
      var cred = error.credential;
      
      
    });


  }


}
