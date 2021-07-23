import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{

  errorMsg: any;
  form = new FormGroup({
      title: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      imageURL: new FormControl('')
  });

  get title(){
    return this.form.get('title');
  }

  get price(){
    return this.form.get('price');
  }

  get category(){
    return this.form.get('category');
  }

  get imageURL(){
    return this.form.get('imageURL');
  }

  categories: any;
  constructor(category:CategoryService, private product:ProductService){
    
    category.getCategories().subscribe((res)=>{
      this.categories = res
    })
  }

  createproduct(product:any){
    if(this.form.invalid || (product.category && product.price && product.title)){
      this.errorMsg = "*Please enter all details";
    }
    else if(product.category && product.price && product.title){
      this.product.createProduct(product);
    }
  }

}
