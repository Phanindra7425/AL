import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

    {
      path:'',
      component:HomePageComponent
    },
    {
      path:'signin',
      component:SignInPageComponent
    },
    {
      path:'signup',
      component:SignUpPageComponent
    },
    {
      path:'reset',
      component:ResetPageComponent
    },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { 

  
}
