import { Component, OnInit } from '@angular/core';
import { Wallet } from '../model/wallet';
import { WalletService } from '../service/wallet.service';

@Component({
  selector: 'app-deduct-wallet',
  templateUrl: './deduct-wallet.component.html',
  styleUrls: ['./deduct-wallet.component.css']
})
export class DeductWalletComponent implements OnInit {
  amount: number = 0;
  balance: number = 1000;
  wallet!: Wallet;
  

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
     this.walletService.getWallet(1).subscribe(
      data => {
        console.log(data);
        this.wallet=data;
      }
     );


  }

}
