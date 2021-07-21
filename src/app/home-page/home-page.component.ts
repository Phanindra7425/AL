import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  text: any = "Page loads";

  constructor(private router:Router){}

  cart(){
    this.text = "cart form loads";
  }

  account(){

    this.text = "account form loads";
  }

  home(){
    this.text = "home page reloads";
    
  }



}
