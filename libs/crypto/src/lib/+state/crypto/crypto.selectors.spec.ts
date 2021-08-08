import { CryptoEntity } from './crypto.models';
import {
  cryptoAdapter,
  CryptoPartialState,
  initialState,
} from './crypto.reducer';
import * as CryptoSelectors from './crypto.selectors';

describe('Crypto Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCryptoId = (it: CryptoEntity) => it.id;
  const createCryptoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CryptoEntity);

  let state: CryptoPartialState;

  beforeEach(() => {
    state = {
      crypto: cryptoAdapter.setAll(
        [
          createCryptoEntity('PRODUCT-AAA'),
          createCryptoEntity('PRODUCT-BBB'),
          createCryptoEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Crypto Selectors', () => {
    it('getAllCrypto() should return the list of Crypto', () => {
      const results = CryptoSelectors.getAllCrypto(state);
      const selId = getCryptoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CryptoSelectors.getSelected(state) as CryptoEntity;
      const selId = getCryptoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCryptoLoaded() should return the current "loaded" status', () => {
      const result = CryptoSelectors.getCryptoLoaded(state);

      expect(result).toBe(true);
    });

    it('getCryptoError() should return the current "error" state', () => {
      const result = CryptoSelectors.getCryptoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
