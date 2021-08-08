import { Action } from '@ngrx/store';

import * as CryptoActions from './crypto.actions';
import { CryptoEntity } from './crypto.models';
import { State, initialState, reducer } from './crypto.reducer';

describe('Crypto Reducer', () => {
  const createCryptoEntity = (id: string, name = ''): CryptoEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Crypto actions', () => {
    it('loadCryptoSuccess should return the list of known Crypto', () => {
      const crypto = [
        createCryptoEntity('PRODUCT-AAA'),
        createCryptoEntity('PRODUCT-zzz'),
      ];
      const action = CryptoActions.loadCryptoSuccess({ crypto });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
