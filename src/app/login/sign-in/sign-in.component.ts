import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
 
  submitted = false;
  constructor(private fb:FormBuilder){}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
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
 onSubmit()
 {
  this.submitted = true;
  console.log('Message Received Succesdfully')
  console.log(this.loginForm.value)
 }
}
