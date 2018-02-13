import {Game} from '../models/game.model';
import {GameAction, LOAD_GAMES, LOAD_GAMES_SUCCESS} from './game.action';

export interface GameState {
  loaded: boolean;
  loading: boolean;
  entities: { [id: number]: Game };
}

const initialState = {
  loaded: false,
  loading: false,
  entities: {},
};

export function gameReducer(state: GameState = initialState, action: GameAction) {
  switch (action.type) {

    case LOAD_GAMES: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_GAMES_SUCCESS: {
      const entities = action.payload.reduce(
        (acc, game: Game) => ({
          ...acc,
          [game.id]: game,
        }),
        {},
      );
      return {
        ...state,
        entities,
        loading: false,
        loaded: true,
      };
    }

    default: {
      return state;
    }
  }
}
