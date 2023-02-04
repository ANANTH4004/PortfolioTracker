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
  
  filterCoin(){
    this.http.get('https://api.coingecko.com/api/v3/search?q=' + this.searchTerm + '&per_page=100&order=market_cap_desc&sparkline=false&price_change_percentage=24h')
    .subscribe(data  => {
     console.log(data)
      this.filteredCoins = this.coins
        .filter((coin: { name: string; symbol: string; }) => coin.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(this.searchTerm.toLowerCase()))
        .slice(0, 100);
    });
  }
  selectCoin(coin: { name: any; }) {
    this.searchTerm = coin.name;
    console.log(`Selected coin: ${coin.name}`);
  }

}
