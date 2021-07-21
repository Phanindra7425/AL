import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { environment } from 'src/environments/environment';
import { LoginguardService } from './loginguard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    ResetPageComponent,
    HomePageComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
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
      }
    ]),
  ],
  providers: [LoginguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
