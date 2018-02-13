import {NgModule} from '@angular/core';
import {GamesListComponent} from './components/games-list/games-list.component';
import {GamesComponent} from './containers/games/games.component';
import {SharedModule} from '../../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {GamesRoutingModule} from './games-routing.module';
import {GameEffects} from './store/game.effect';
import {gameReducer} from './store/game.reducer';
import {GamesService} from './services/games.service';

@NgModule({
  imports: [
    SharedModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', gameReducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  declarations: [GamesListComponent, GamesComponent],
  providers: [GamesService]
})
export class GamesModule {
}
