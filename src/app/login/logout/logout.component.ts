import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private _ngZone:NgZone , private router:Router , private service :AuthService){} 
  ngOnInit(): void {
   
  }
  public logout(){
    this.service.signOutExternal();
    this._ngZone.run(()=>{
      this.router.navigate(['/']).then(()=> window.location.reload());
    })
  }

}
