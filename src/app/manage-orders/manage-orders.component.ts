import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';

export interface Product {
  ProductName: string;
  Category:string;
  Price: number;
  Edit: number;
}



@Component({
  selector: 'manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent{

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['title','category', 'price', 'edit'];
  dataSource: any;

  constructor(private Products:ProductService){
    this.Products.getAllProducts().subscribe((prod)=>{
      this.dataSource = new MatTableDataSource(prod);
      this.dataSource.paginator = this.paginator;
    })
  }  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editproduct(element:any){
    this.Products.ProducttobeEdited = element;
    console.log(element);
    this.Products.updateProduct('123',element);
  }
}
