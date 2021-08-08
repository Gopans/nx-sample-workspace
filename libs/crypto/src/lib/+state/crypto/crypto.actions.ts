import { createAction, props } from '@ngrx/store';
import { CryptoEntity } from './crypto.models';

export const init = createAction('[Crypto Page] Init');

export const loadCryptoSuccess = createAction(
  '[Crypto/API] Load Crypto Success',
  props<{ crypto: CryptoEntity[] }>()
);

export const loadCryptoFailure = createAction(
  '[Crypto/API] Load Crypto Failure',
  props<{ error: any }>()
);
