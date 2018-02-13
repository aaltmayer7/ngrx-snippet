import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from './containers/games/games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent, // My container
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {
}
