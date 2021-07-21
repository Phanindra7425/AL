import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate{

  private shouldenable: boolean = true;
  constructor() { }

  canActivate(){

    return this.shouldenable;
  }

  set shouldEnable(value:boolean){
    this.shouldenable = value;
  }

  get shouldEnable(){
    return this.shouldenable;
  }
}
