import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import * as fromCrypto from './+state/crypto/crypto.reducer';
import { CryptoEffects } from './+state/crypto/crypto.effects';
import { CurrencyListComponent } from './ui/currency-list/currency-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    StoreModule.forFeature(fromCrypto.CRYPTO_FEATURE_KEY, fromCrypto.reducer),
    EffectsModule.forFeature([CryptoEffects]),
  ],
  declarations: [
    CurrencyListComponent
  ],
  exports: [
    CurrencyListComponent
  ],
})
export class CryptoModule {}
