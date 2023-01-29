import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Root } from '../Interface';
import { CoinService } from '../Services/coin.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data !: Root
  coin: any;
  totalBalance : number = 2000;
  options = [
    {value: 'option1', name: 'Option 1'},
    {value: 'option2', name: 'Option 2'},
    {value: 'option3', name: 'Option 3'}
  ];
  selectedOption = 'option1';
  data1 !: (string | number)[][];
  constructor(private coinService : CoinService){}
  coinName = ['cardano' , 'bitcoin' , 'ripple' , 'ethereum','coin','vechain','dogecoin'];
 dataArray !: any[];
ngOnInit(): void {
  this.getData();
 
}

getData(){
  this.dataArray = [];
  for(let item of this.coinName){
    this.coinService.getCoin(item).subscribe(coin => {
      this.data = coin as Root;
      coin =  [this.data.market_cap_rank, this.data.name, this.data.market_data.current_price.usd, this.data.market_data.price_change_percentage_1h_in_currency.usd,
        this.data.market_data.price_change_percentage_24h, this.data.market_data.price_change_percentage_7d, this.data.market_data.price_change_percentage_30d, this.data.market_data.total_supply, this.data.last_updated, 'Buy/Sell/Hold']
    console.log(coin);
        this.data1 = [
        [this.data.market_cap_rank, this.data.name, this.data.market_data.current_price.usd, this.data.market_data.price_change_percentage_1h_in_currency.usd,
           this.data.market_data.price_change_percentage_24h, this.data.market_data.price_change_percentage_7d, this.data.market_data.price_change_percentage_30d, this.data.market_data.total_supply, this.data.last_updated, 'Buy/Sell/Hold']
      ];
      this.dataArray.push(coin)
  });
  }
  return this.dataArray;
}

 
 
 
}
