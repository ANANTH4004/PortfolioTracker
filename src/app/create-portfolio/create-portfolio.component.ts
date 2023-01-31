import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss']
})
export class CreatePortfolioComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data :any , private auth : AuthService){}

  portName : string;
  userName : string;
  createPortfolio(){
    this.userName =  this.data.userName;
    const data = {'portfolioName' : this.portName , 'userName': this.userName};
    this.auth.createPortfolio(data).subscribe(d =>{
      console.log(d);
    })
  }
}
