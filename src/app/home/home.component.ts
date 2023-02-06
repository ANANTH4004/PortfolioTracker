import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { concatWith, Observable, of } from 'rxjs';
import { Coin, portfolio } from '../Classes/model';
import { CreatePortfolioComponent } from '../create-portfolio/create-portfolio.component';
import { Root } from '../Interface';
import { SearchComponent } from '../search/search.component';
import { CoinService } from '../Services/coin.service';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private coinService : CoinService , private pop : MatDialog , private dataService : DataService){}

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

coinName : string[] =[];
 dataArray !: any[];
 portfolios!: portfolio[];
 portfolioNames !: string[];
 coinsDetails : any;
 portfolioId : string;
ngOnInit(): void {
  
  // this.getPortfolios();
 // this.getData();
  // setTimeout(() => {
  //   console.log(this.portfolioNames);
  //   this.options = this.portfolioNames;
  //   this.selectedOption = this.portfolioNames.at(0)
  // }, 1000);
  this.getPortfolios().subscribe(()=>{
    setTimeout(() => {
      this.getCoinName().subscribe(() => {
        setTimeout(() => {
          this.getData();
        }, 3000);
      
      });
    }, 2000);
  })
 
 
  
}
getPortfolios() : Observable<any>{
  this.dataService.getPortfolio("varun").subscribe(data =>{
    console.log(data);
    this.portfolios = data ;
    this.portfolioNames = this.portfolios.map(portfolio => portfolio.portfolioName);
    console.log(this.portfolioNames);
    this.portfolioId = "5f3409eb-5bea-4443-ea83-08db02d30646"
    
  });
  return of(this.portfolioNames)
}

getCoinName(): Observable<string[]>{
 // this.dataService.getPortfolioById("5f3409eb-5bea-4443-ea83-08db02d30646")
  this.dataService.getCoins(this.portfolioId).subscribe(data =>{
    console.log(data);
    this.coinsDetails = data;
    for(let coin of this.coinsDetails){
      this.coinName.push(coin.coinName)
    }
  })
  setTimeout(() => {
    console.log(this.coinsDetails);
    console.log(this.coinName)
  }, 2000);
  return of(this.coinName);
}

createPortfolio(){
 const popUp = this.pop.open(CreatePortfolioComponent,{ 
  width: '30%',
  data :{
    userName: "varun"
  }
 })
}

addCoin(){
  const search = this.pop.open(SearchComponent,{
    width :'40%',
    position: { top: '5%' }
  })
}


getData(): Observable<any>{
  this.dataArray = [];
  for(let item of this.coinName){
    item = item.toLowerCase();
    this.coinService.getCoin(item).subscribe(coin => {
      this.data = coin as Root;
      coin =  [this.data.market_cap_rank, this.data.name, this.data.market_data.current_price.usd, this.data.market_data.price_change_percentage_1h_in_currency.usd,
        this.data.market_data.price_change_percentage_24h, this.data.market_data.price_change_percentage_7d, this.data.market_data.price_change_percentage_30d, this.data.market_data.total_supply, this.data.last_updated, 'Buy/Sell/Hold']
   // console.log(coin);
        this.data1 = [
        [this.data.market_cap_rank, this.data.name, this.data.market_data.current_price.usd, this.data.market_data.price_change_percentage_1h_in_currency.usd,
           this.data.market_data.price_change_percentage_24h, this.data.market_data.price_change_percentage_7d, this.data.market_data.price_change_percentage_30d, this.data.market_data.total_supply, this.data.last_updated, 'Buy/Sell/Hold']
      ];
      this.dataArray.push(coin)
  });
  }
  console.log("get data called")
  return of(this.dataArray);
}

 
 
 
}
