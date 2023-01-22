import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = environment.apiUri;
  constructor(private http : HttpClient) { }

  public signOutExternal = () =>
  {
    localStorage.removeItem('token');
    console.log("Token Removed");
  }
  LoginWithGoogle(credential : string): Observable<any>{
      const header = new HttpHeaders().set('Content-type','application/json');
      return this.http.post(this.path + "LoginWithGoogle",JSON.stringify(credential),{headers:header})
  }
}
