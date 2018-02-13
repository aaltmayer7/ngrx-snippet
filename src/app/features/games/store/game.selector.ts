import {createSelector, createFeatureSelector} from '@ngrx/store';
import {GameState} from './game.reducer';

export const selectFeature = createFeatureSelector<GameState>('games');

export const selectGames = createSelector(selectFeature, (state: GameState) => {
  return Object.keys(state.entities).map(id => {
    return state.entities[id];
  });
});
