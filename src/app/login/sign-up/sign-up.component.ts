import { Component } from '@angular/core';
import { AbstractControl, FormBuilder , FormGroup , Validators ,  } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

 // signUp !: FormGroup;
  constructor(private fb : FormBuilder, private auth : AuthService){}

  signUp = this.fb.group({
    userName : ['' ,[Validators.required , Validators.minLength(5)]],
    password : ['',[
      Validators.required , 
      Validators.pattern("^[7-9][0-9]{9}$"),
    ]],
    email:['',[Validators.required , Validators.email]],
    mobileNo : ['',[Validators.required , Validators.pattern("^[7-9][0-9]{9}$")]],
    confirmPassword : ['',[
      Validators.required , 
      Validators.pattern("^[7-9][0-9]{9}$"),
    ]]
  });
  get c(): { [key: string]: AbstractControl } {
    return this.signUp.controls;
  }

  onSubmit(){

    console.log(this.signUp.value)
    this.auth.register(this.signUp.value).subscribe(data =>{
      console.log(data);
    })
  }
}
