import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private editproduct: any;
  constructor(private db:AngularFireDatabase) { }

  get ProducttobeEdited(){
    return this.editproduct;
  }

  set ProducttobeEdited(value){
    this.editproduct = value;
  }

  createProduct(product:any){
    this.db.list('/Products/',ref => ref.orderByChild('name')).push(product);
  }

  getAllProducts(){
    
    return this.db.list('/Products').valueChanges();
  }

  updateProduct(productId:any,product:any){

    console.log('in product service')
    this.db.object('/Products').snapshotChanges()
    .subscribe( (items: any) =>{
      console.log(items.payload.val());
    })
    

    //return this.db.object('/Produts' + productId).update(product);

  }
}
