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
    return this.db.list('/Products');
  }

  updateProduct(product:any){
  
    let updatedobj = {
      category:product.category,
      imageURL:product.imageURL,
      price:product.price,
      title:product.title
    }

    let id = localStorage.getItem('id');
    return this.db.object('Products/' + id).update(updatedobj)

  }
}
