import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http : HttpClient) { }
  getCoin(name: string = "bitcoin") {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${name}`);
  }
}
