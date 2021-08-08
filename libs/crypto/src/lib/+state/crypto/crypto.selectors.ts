import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CRYPTO_FEATURE_KEY, State, cryptoAdapter } from './crypto.reducer';

// Lookup the 'Crypto' feature state managed by NgRx
export const getCryptoState = createFeatureSelector<State>(CRYPTO_FEATURE_KEY);

const { selectAll, selectEntities } = cryptoAdapter.getSelectors();

export const getCryptoLoaded = createSelector(
  getCryptoState,
  (state: State) => state.loaded
);

export const getCryptoError = createSelector(
  getCryptoState,
  (state: State) => state.error
);

export const getAllCrypto = createSelector(getCryptoState, (state: State) =>
  selectAll(state)
);

export const getCryptoEntities = createSelector(
  getCryptoState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCryptoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCryptoEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
