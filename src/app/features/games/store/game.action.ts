import {Action} from '@ngrx/store';
import {Game} from '../models/game.model';

/**
 * Load Games
 */
export const LOAD_GAMES = '[GAMES] LOAD GAMES';
export const LOAD_GAMES_SUCCESS = '[GAMES] LOAD GAMES SUCCESS';
export const LOAD_GAMES_ERROR = '[GAMES] LOAD GAMES  ERROR';

export class LoadGames implements Action {
  readonly type = LOAD_GAMES;

  constructor(public payload = undefined) {
  }
}

export class LoadGamesSuccess implements Action {
  readonly type = LOAD_GAMES_SUCCESS;

  constructor(public payload: Game[]) {
  }
}

export class LoadGamesError implements Action {
  readonly type = LOAD_GAMES_ERROR;

  constructor(public payload: any) {
  }
}

export type GameAction =
  | LoadGames
  | LoadGamesSuccess
  | LoadGamesError;
