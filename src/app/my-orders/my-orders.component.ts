import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{

  text = "inConstructor"
  constructor() {
    console.log(this.text);
   }


}
