import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate{

  private isLoggedin: boolean = false;
  constructor() { }

  canActivate(){
    return !this.isLoggedin;
  }

  set isLoggedIn(value:boolean){
    this.isLoggedin = value;
  }

  get isLoggedIn(){
    return this.isLoggedin;
  }
}
