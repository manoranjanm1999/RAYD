import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserSignupComponent } from './customer-signup/user-signup.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {path: "loginpage", component: LoginpageComponent},
  {path: "customersignup", component: UserSignupComponent},
  {path: "addresspage", component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
