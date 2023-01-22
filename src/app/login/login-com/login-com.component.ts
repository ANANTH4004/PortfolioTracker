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
export class LoginComComponent implements OnInit , AfterViewInit {

  constructor(private _ngZone:NgZone , private router:Router , private service :AuthService){} 
 ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
          client_id: environment.clientId,
          scope: 'profile email'
      }).then(() => {
          gapi.signin2.render('buttonDiv', {
              scope: 'profile email',
              width: 240,
              height: 50,
              longtitle: true,
              theme: 'dark',
              onsuccess: (googleUser : any) => {
                  // Handle successful sign-in here
                  // You can access the user's profile and ID token using the following properties:
                  // googleUser.getBasicProfile()
                  // googleUser.getAuthResponse().id_token
                  let id_token = googleUser.getAuthResponse().id_token;
                  this.service.LoginWithGoogle(id_token).subscribe(
                      (x: any) => {
                          localStorage.setItem("token", x.token);
                          this._ngZone.run(() => {
                              this.router.navigate(['/logout']);
                          })
                      },
                      (error: any) => {
                          console.log(error);
                      }
                  );
              },
              onfailure: (error : any) => {
                  // Handle sign-in failure here
              }
          });
      });
  });
}

ngAfterViewInit(): void {
  //   window.onload= () =>{ 
  //     google.accounts.id.initialize({
  //       client_id :'',
  //       callback :this.handleCredentialResponse.bind(this),
  //       auto_select:false,
  //       cancel_on_tap_outside:true
  //     });
  //     const buttonDiv = document.getElementById("buttonDiv");
  //     if(buttonDiv){
  //       google.accounts.id.renderButton(buttonDiv, {
  //         theme: "outline", size: "large", width : 100});
  //     }
     
  //       google.accounts.id.prompt((notification:PromptMomentNotification) =>{});
  //   }
  // }

  // async handleCredentialResponse(response : CredentialResponse){
  //   await this.service.LoginWithGoogle(response.credential).subscribe(
  //     (x:any)=>{
  //       localStorage.setItem("token",x.token);
  //       this._ngZone.run(()=>{
  //         this.router.navigate(['/login']);
  //       })
  //     },
  //     (error:any) => {
  //       debugger
  //       console.log(error);
  //     }
  //   );
  
  }
}
