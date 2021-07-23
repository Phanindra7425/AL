import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { environment } from 'src/environments/environment';
import { LoginguardService } from './loginguard.service';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AdminguardService } from './adminguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    ResetPageComponent,
    HomePageComponent,
    SignInComponent,
    AdminOrdersComponent,
    ManageOrdersComponent,
    ProductFormComponent,
    MyOrdersComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomePageComponent
      },
      {
        path:'usersignin',
        component:SignInPageComponent,
        canActivate:[LoginguardService]
      },
      {
        path:'signup',
        component:SignUpPageComponent,
        canActivate:[LoginguardService]
      },
      {
        path:'reset',
        component:ResetPageComponent,
        canActivate:[LoginguardService]
      },
      {
        path:'signin',
        component:SignInComponent,
        canActivate:[LoginguardService]
      },
      {
        path:'my-orders',
        component:MyOrdersComponent,
      },
      {
        path:'admin-orders',
        component:AdminOrdersComponent,
        canActivate:[AdminguardService]
      },
      {
        path:'admin/products/new',
        component:ProductFormComponent,
        canActivate:[AdminguardService]
      },
      {
        path:'manage-products',
        component:ManageOrdersComponent,
        canActivate:[AdminguardService]
      },
      {
        path:'edit-product/:id',
        component:EditProductComponent,
        canActivate:[AdminguardService]
      }
    ]),
  ],
  providers: [
    LoginguardService,
    AdminguardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
