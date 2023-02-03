import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  CoinName : string;
  searchTerm: string;
  coins: any;
  filteredCoins: any[];
coinList: any;
  constructor(private http : HttpClient){}
  ngOnInit() {
    this.http.get('https://api.coingecko.com/api/v3/coins/list')
    .subscribe(data => {
      this.coins = data;
      this.coinList = data;
      this.filteredCoins = this.coins;
      console.log(this.coinList)
    });
  }
  filterCoins() {
    this.filteredCoins = this.coinList
      .filter((coin: { name: string; }) => coin.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()))
      .slice(0, 100);
  }
  
  
  

  selectCoin(coin: { name: any; }) {
    console.log(`Selected coin: ${coin.name}`);
  }
  selectCoin1(coin: { name: any; }) {
    console.log(`Selected coin: ${coin.name}`);
  }
}
