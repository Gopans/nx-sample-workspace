import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import {CryptoEntity,Cryptoentityresult} from '../../+state/crypto/crypto.models';


@Component({
  selector: 'nx-sample-workspace-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: CryptoEntity[] =[];
  displayedColumns: string[] = ['id', 'name', 'price'];
  
  constructor(private cryptoServcie:CryptoService ) { }

  ngOnInit(): void {
    this.cryptoServcie.getCryptoCurrencies().subscribe((data:any)=>{
      this.currencies = data.data;
    });
  }

}
