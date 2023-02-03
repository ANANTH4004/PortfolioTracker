import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { LoginModule } from './login/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './Material/material.module';
import { AuthService } from './Services/auth.service';
import { HeaderInterceptor } from './Services/header.interceptor';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePortfolioComponent,
    SearchComponent,
   
  ],
  imports: [
    LoginModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
 
  ],
  providers: [
    AuthService,
    {
      provide : HTTP_INTERCEPTORS, useClass : HeaderInterceptor, multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
