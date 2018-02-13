import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterEffects} from './store/router.effect';
import {StoreModule} from '@ngrx/store';
import {ToastrModule} from 'ngx-toastr';
import {WaitingInterceptor} from './interceptors/waiting.interceptor';

@NgModule({
  imports: [
    RouterModule,
    StoreRouterConnectingModule,
    SlimLoadingBarModule.forRoot(),
    ToastrModule.forRoot(),
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot({
      routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: WaitingInterceptor, multi: true}
  ],
})

export class CoreModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreModule,) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${
        moduleName
        } has already been loaded. Import Core modules in the AppModule only.`,
    );
  }
}
