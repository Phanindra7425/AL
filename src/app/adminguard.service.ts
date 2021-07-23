import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate{

  active = false;

  canActivate(){
    return this.active;
  }
}
