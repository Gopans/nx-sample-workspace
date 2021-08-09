import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'any'
})
export class CryptoService {



  constructor(private http:HttpClient) { 

  }


  getCryptoCurrencies(){
  
  let cryptoCurrencies = this.http.get("https://api.coincap.io/v2/assets");
  return cryptoCurrencies;
  }
}
 