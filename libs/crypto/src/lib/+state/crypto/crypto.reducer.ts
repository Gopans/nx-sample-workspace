import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CryptoActions from './crypto.actions';
import { CryptoEntity } from './crypto.models';

export const CRYPTO_FEATURE_KEY = 'crypto';

export interface State extends EntityState<CryptoEntity> {
  selectedId?: string | number; // which Crypto record has been selected
  loaded: boolean; // has the Crypto list been loaded
  error?: string | null; // last known error (if any)
}

export interface CryptoPartialState {
  readonly [CRYPTO_FEATURE_KEY]: State;
}

export const cryptoAdapter: EntityAdapter<CryptoEntity> =
  createEntityAdapter<CryptoEntity>();

export const initialState: State = cryptoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const cryptoReducer = createReducer(
  initialState,
  on(CryptoActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CryptoActions.loadCryptoSuccess, (state, { crypto }) =>
    cryptoAdapter.setAll(crypto, { ...state, loaded: true })
  ),
  on(CryptoActions.loadCryptoFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cryptoReducer(state, action);
}
