import { Action } from '@ngrx/store';
// import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
      // on peut ajouter en optionnel query, ...
      // query?: object;
      // extras?: NavigationExtras;
    },
  ) {}
}

export type Actions = Go; // Back, Forward
