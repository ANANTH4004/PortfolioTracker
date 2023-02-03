import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { portfolio } from '../Classes/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getPortfolio(userName : string) : Observable<portfolio[] | null>{
    const apiUri = `https://localhost:7054/api/Portfolios/userName/${userName}`
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<portfolio[] | null>(apiUri ,config);
  }
}
