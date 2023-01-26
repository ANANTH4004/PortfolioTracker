import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComComponent } from './login-com/login-com.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : 'login' , component:LoginComComponent},
  {path : 'logout' , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
