import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent{

  productinfo:any;
  categories: any;
  errorMsg: any;
  form = new FormGroup({
    title: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    imageURL: new FormControl('')
  });
  constructor(private productService:ProductService, category:CategoryService, private router:Router) {

    category.getCategories().subscribe((res)=>{
      this.categories = res
    })
    
    this.productinfo = this.productService.ProducttobeEdited;
    console.log(this.productinfo);
    if(this.productinfo){
      this.form.setValue({
        title: this.productinfo.title,
        price: this.productinfo.price,
        category: this.productinfo.category,
        imageURL: this.productinfo.imageURL
      })
    }


  }  

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


  updateproduct(product:any){
    if((product.category && product.price && product.title)){
      this.productService.updateProduct(product).then((res)=>{
        this.router.navigate(['/manage-products']);
      }).catch((err)=>{
        this.errorMsg = "*Please enter all details";
      })
    }
  }


}
