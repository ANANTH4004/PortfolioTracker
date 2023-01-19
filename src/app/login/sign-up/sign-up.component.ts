import { Component } from '@angular/core';
import { AbstractControl, FormBuilder , FormGroup , Validators ,  } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

 // signUp !: FormGroup;
  constructor(private fb : FormBuilder){}

  signUp = this.fb.group({
    userName : ['' ,[Validators.required , Validators.minLength(5)]],
    password : ['',[
      Validators.required , 
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"),
    ]],
    email:['',[Validators.required , Validators.email]],
    mobileNo : ['',[Validators.required , Validators.pattern("^[7-9][0-9]{9}$")]]
  });
  get c(): { [key: string]: AbstractControl } {
    return this.signUp.controls;
  }

  onSubmit(){
    console.log(this.signUp.value)
  }
}
