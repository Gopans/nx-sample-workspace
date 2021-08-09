import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';


@Component({
  selector: 'nx-sample-workspace-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: any;
  constructor(private cryptoServcie:CryptoService ) { }

  ngOnInit(): void {
    this.cryptoServcie.getCryptoCurrencies().subscribe((data:any)=>{
      this.currencies = data.data;
    });
  }

}
