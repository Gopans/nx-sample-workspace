import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CryptoActions from './crypto.actions';
import { CryptoEffects } from './crypto.effects';

describe('CryptoEffects', () => {
  let actions: Observable<Action>;
  let effects: CryptoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CryptoEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CryptoEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CryptoActions.init() });

      const expected = hot('-a-|', {
        a: CryptoActions.loadCryptoSuccess({ crypto: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
