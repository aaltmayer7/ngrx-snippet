import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Game} from '../../models/game.model';
import {Store} from '@ngrx/store';
import {GameState} from '../../store/game.reducer';
import {selectGames} from '../../store/game.selector';
import {LoadGames} from '../../store/game.action';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(private store: Store<GameState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadGames());
    this.games$ = this.store.select(selectGames);
  }
}
