import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase'
import { TypeScriptEmitter } from '@angular/compiler';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  private isadmin:any;
  constructor(private db:AngularFireDatabase) {
    
  }

  isAdmin():boolean{
    return this.isadmin;
  }

  get(uid:any):Promise<any>{
    return this.db.object('/users/'+ uid).query.once('value');
   
  }
  save(user:firebase.User){
    // this.db.object('/users/'+ user.uid).set({
    //   name:user.displayName,
    //   email: user.email
    // })

    this.db.object('/users/' + user.uid).update({
      name:user.displayName,
      email: user.email
    })
  }
}
