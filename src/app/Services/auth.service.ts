import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import {map} from 'rxjs';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenParams } from '../Classes/tokenParams';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = environment.apiUri;
  accesToken: string = "";
  private TokenAPI = "https://localhost:7054/login"
  constructor(private http : HttpClient) { }


  login(userName : string , password : string):Observable<TokenParams | null>{
    var headersForAPI = new HttpHeaders({'Content-Type' : 'application/json'});
    const params = new HttpParams()
    .set('UserName', userName)
    .set('Password', password);
    const data = {'username': userName, 'password': password};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    console.log(JSON.stringify(params))
    return this.http.post<TokenParams | null>(this.TokenAPI ,data ,config
    );
}
}
