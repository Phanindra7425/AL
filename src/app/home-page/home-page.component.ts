import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  text: any = "Page loads";


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
