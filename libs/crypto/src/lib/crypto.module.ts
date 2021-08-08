import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCrypto from './+state/crypto/crypto.reducer';
import { CryptoEffects } from './+state/crypto/crypto.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCrypto.CRYPTO_FEATURE_KEY, fromCrypto.reducer),
    EffectsModule.forFeature([CryptoEffects]),
  ],
})
export class CryptoModule {}
