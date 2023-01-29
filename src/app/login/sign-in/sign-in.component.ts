import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TokenParams } from 'src/app/Classes/tokenParams';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  submitted = false;
  constructor(private fb:FormBuilder, private auth : AuthService , private router:Router){}
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]
    ]
  });
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  

  // sign in With Token
  tokenParams !: TokenParams;
 onSubmit()
 {
  this.submitted = true;
  console.log('Message Received Succesdfully')
  console.log(this.loginForm.get('email')?.value)
  console.log(this.loginForm.value);
  const password = this.loginForm.get('password')?.value
  const userName = this.loginForm.get('email')?.value
  this.auth.login(userName,password).subscribe(
    data =>{
      debugger
      console.log(data);
      this.tokenParams = data;
      localStorage.setItem('token', data.token)
      this.auth.accesToken = this.tokenParams.token;
      this.router.navigate(['/home'])
    }
  )
 }
}
