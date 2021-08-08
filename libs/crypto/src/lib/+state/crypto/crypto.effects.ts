import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CryptoActions from './crypto.actions';
import * as CryptoFeature from './crypto.reducer';

@Injectable()
export class CryptoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CryptoActions.loadCryptoSuccess({ crypto: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CryptoActions.loadCryptoFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
