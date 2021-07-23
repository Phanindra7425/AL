import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';


export interface Product {
  id: any;
  ProductName: string;
  Category:string;
  Price: number;
}

const productinfo: any[] = [];

@Component({
  selector: 'manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent{

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['title','category', 'price', 'edit'];
  dataSource: any = [];
  id:any =[];

  constructor(private Products:ProductService){

      //let subscribe = this.Products.getAllProducts().subscr
      this.Products.getAllProducts().snapshotChanges()
      .subscribe((data)=>{
        // console.log(data);
        data.forEach(element=>{
          this.dataSource.push(element.payload.val());
          this.id.push(element.key);
        })
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.data.forEach((element: any,i=0)=>{
          let obj = {
            key:this.id[i],
            title:element.title,
            category:element.category,
            price:element.price,
            imageURL: element.imageURL
          }
          this.dataSource.data[i] = obj;
          i++;
        })
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });

      // data.forEach(element =>{
      //   // this.product.key = element.key;
      //   // this.product.Category = element.payload.val().
      //   console.log(element.key);
      //   let res = (element.payload.val());
      //   this.product.key = element.key;
      //   console.log(this.product);
      //   console.log(res);

      //   // this.product.key = element.key;
      //   // this.product.ProductName = element.payload.val().title;
      //   // productinfo.push({element.key: element.payload.val()});
      //   // console.log(productinfo);

      // });
      // .map(res =>{

      //   res.forEach(element =>{
      //     console.log(element);
      //   });

      //   }));
     

    //   subscribe((data)=>{
    //     console.log('in subscribe');
    //     console.log(data);
    //    data.map((res)=>{
    //      console.log(res)
    //      console.log(res.payload.val())
    //     //  this.dataSource = new MatTableDataSource(res.payload.val());
    //     //  this.dataSource.paginator = this.paginator;
    //    })
    //  })
     
    // .subscribe(val =>{
    //   console.log(val.payload.exportVal());
    //   var value: any[] = val.payload.val();

        
    //     value.forEach((element : any) =>{
    //       console.log(element)
    //     })
    //   })
    // .subscribe((prod)=>{
    //   console.log(prod.payload.val());
    //   let obj = prod.payload.val();      
    //   this.dataSource = new MatTableDataSource();
    //   this.dataSource.paginator = this.paginator;
    // })
    
  }  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editproduct(element:any){
    this.Products.ProducttobeEdited = element;
    localStorage.setItem('id',element.key);
    this.Products.updateProduct(element);
  }
}
