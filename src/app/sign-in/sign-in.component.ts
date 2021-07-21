import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authoriser:AngularFireAuth, private router:Router){

  }

  gSignIn(){
    
    let provider = new firebase.auth.GoogleAuthProvider();
    this.authoriser.signInWithPopup(provider).then((response)=>{
      if(response.user){
        this.router.navigate(['/']);
      }

    }).catch((error)=>{
      var errorMessage = error.message;
      var email = error.email;
      var cred = error.credential;
      
      
    });


  }


}
