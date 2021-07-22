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
import { AuthguardService } from './authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    ResetPageComponent,
    HomePageComponent,
    SignInComponent,
    AdminOrdersComponent,
    ManageOrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
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
        path:'home',
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
        path:'admin-orders',
        component:AdminOrdersComponent,
        canActivate:[AuthguardService]
      },
      {
        path:'manage-orders',
        component:ManageOrdersComponent,
        canActivate:[AuthguardService]
      }
    ]),
  ],
  providers: [LoginguardService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
