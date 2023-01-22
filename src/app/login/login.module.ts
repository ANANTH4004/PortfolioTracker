import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';


import { SignUpComponent } from './sign-up/sign-up.component';

//angular Material.
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LoginComComponent } from './login-com/login-com.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginComComponent,
    LogoutComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class LoginModule { }
