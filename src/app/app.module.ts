import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { ServiceProvideSignupComponent } from './service-provide-signup/service-provide-signup.component';
import { HeaderComponent } from './header/header.component';
import { UserSignupComponent } from './customer-signup/user-signup.component';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserSignupComponent,
    ServiceProvideSignupComponent,
    HeaderComponent,
    AddressComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
