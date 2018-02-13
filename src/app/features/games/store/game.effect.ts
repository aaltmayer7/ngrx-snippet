import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import {GameAction, LOAD_GAMES, LOAD_GAMES_ERROR, LoadGames, LoadGamesError, LoadGamesSuccess} from './game.action';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Game} from '../models/game.model';
import {GamesService} from '../services/games.service';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private toastr: ToastrService,
              private gamesService: GamesService) {
  }

  @Effect()
  loadGames$ = this.actions$
    .ofType(LOAD_GAMES)
    .pipe(
      switchMap(() =>
        this.gamesService
          .findAll()
          .pipe(
            map((games: Game[]) => new LoadGamesSuccess(games)),
            catchError((error: Error) => of(new LoadGamesError(error))),
          ),
      ),
    );


  @Effect({dispatch: false})
  gameError$ = this.actions$
    .ofType(LOAD_GAMES_ERROR)
    .pipe(
      map((action: GameAction) => action.payload),
      tap((err: Error) => {
        if (err instanceof HttpErrorResponse) {
          const httpErr: HttpErrorResponse = err;
          this.toastr.error(httpErr.error);
        }
      }),
    );
}
