import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as google from 'google-one-tap';

import {CredentialResponse , PromptMomentNotification} from 'google-one-tap'
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

declare var gapi: any;

@Component({
  selector: 'app-login-com',
  templateUrl: './login-com.component.html',
  styleUrls: ['./login-com.component.scss']
})
export class LoginComComponent implements  OnInit {

  constructor(private _ngZone:NgZone , private router:Router , private service :AuthService){} 
 
  private clientId : string = environment.clientId

ngOnInit(): void {
  
    (window as any).onload = function() { 
      google.accounts.id.initialize({
        client_id :this.clientId,
        callback :this.handleCredentialResponse.bind(this),
        auto_select:false,
        cancel_on_tap_outside:true
      });
      const buttonDiv = document.getElementById('buttonDiv');
      if(buttonDiv){
        google.accounts.id.renderButton(buttonDiv, {
          theme: "outline", size: "large", width:100 });
      }
        google.accounts.id.prompt((notification:PromptMomentNotification) =>{});
    }
  }
  async handleCredentialResponse(response : CredentialResponse){
    await this.service.LoginWithGoogle(response.credential).subscribe(
      (x:any)=>{
        localStorage.setItem("token",x.token);
        this._ngZone.run(()=>{
          this.router.navigate(['/']);
        })
      },
      (error:any) => {
       
        console.log(error);
      }
    );
  
  }


}

