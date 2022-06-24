import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Wallet } from '../model/wallet';


@Injectable({
  providedIn: 'root'
})
export class WalletService {
   url: string = "http://localhost:8080/wallets"
  constructor(private http: HttpClient) { }
  getWallet(userId : number): Observable<Wallet> {
   console.log("Service - before calling get.");
    let observable: Observable<Wallet> = this.http.get<Wallet>(this.url + "/" + userId);
   console.log("Service - after calling get.");
    return observable;
  }
}
