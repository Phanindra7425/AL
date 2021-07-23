import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { LoginguardService } from '../loginguard.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DbserviceService } from '../dbservice.service';
import { AdminguardService } from '../adminguard.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
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
export class HomePageComponent{

  text: any;
  enable = false;
  cartvalue = 0;
  isAdmin = false;
  form: any;
  Profile = "Sign In"


  constructor(private auth:AngularFireAuth, private router:Router, private loginguard:LoginguardService,
    private userService:DbserviceService,private admin:AdminguardService, private route:ActivatedRoute){
    this.auth.onAuthStateChanged((response)=>{
      if(response?.displayName){
        this.Profile = response.displayName;
        this.enable = !this.enable;
        this.loginguard.isLoggedIn = true;
        this.userService.get(response.uid).then((res:any)=>{
          if(res.val()){
            this.isAdmin = res.val().isAdmin;
            this.admin.active = true;
          }
        })
      }
    })

  }
  cart(){
    this.text = "cart form loads";
  }

  Logout(){
    this.auth.signOut().then(()=>{
      this.Profile = 'Sign In';
      this.enable = !this.enable;
      this.loginguard.isLoggedIn = false;
      this.router.navigate(['/']);
    }).catch((error)=>{
      console.log(error);
    });
  }

  myorders(){

    if(this.loginguard.isLoggedIn){
      this.router.navigate(['/my-orders']);
    }else{
      localStorage.setItem('returnUrl','/my-orders');
    }

  }




}
