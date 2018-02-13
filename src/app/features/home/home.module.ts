import {NgModule} from '@angular/core';
import {HomeComponent} from './containers/home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {NavbarComponent} from './containers/navbar/navbar.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, NavbarComponent]
})
export class HomeModule {
}
