import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import {InitComponent} from './core/components/init/init.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: InitComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/features/home/home.module#HomeModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
