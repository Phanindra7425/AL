import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginguardService } from '../loginguard.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  text: any;
  Profile: String = "Profile";
  enable = false;

  constructor(private auth:AngularFireAuth, private router:Router, private loginguard:LoginguardService){
    this.auth.onAuthStateChanged((response)=>{
      if(response?.displayName){
        this.Profile = response.displayName;
        this.enable = true;
        this.loginguard.shouldEnable = false;
      }
    })

  }
  cart(){
    this.text = "cart form loads";
  }

  Logout(){
    this.auth.signOut().then(()=>{
      this.Profile = 'Profile';
      this.enable = false;
      this.loginguard.shouldEnable = true;
      this.router.navigate(['/']);
    }).catch((error)=>{
      console.log(error);
    });
  }




}
