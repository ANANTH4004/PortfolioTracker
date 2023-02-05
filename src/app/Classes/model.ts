
export class Register{
    userName : string;
    password : string;
    confirmPassword : string;
    mobileNo : string;
}

export interface portfolio {
    portfpolioId: string
    portfolioName: string
    totalBalance: number
    coins: any
    userName: string
    user: any
  }

  export interface Coin {
    coinId: string
    coinName: string
    totalCoins: number
    totalBuyingPrice: number
    transactions: any
    portfolioId: string
    portfolio: any
  }
  
  