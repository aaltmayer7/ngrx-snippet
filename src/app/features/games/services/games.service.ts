import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../models/game.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.api()}/games`);
  }
}
