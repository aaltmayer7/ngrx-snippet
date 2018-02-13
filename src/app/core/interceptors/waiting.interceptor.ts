import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {tap} from 'rxjs/operators';

@Injectable()
export class WaitingInterceptor implements HttpInterceptor {
  constructor(private slimLoadingBarService: SlimLoadingBarService) {
    this.slimLoadingBarService.start();
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler,): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(
        evt => {
          if (evt instanceof HttpResponse) {
            debugger;
            this.slimLoadingBarService.complete();
          }
        },
        (err: any) => {
          debugger;
          this.slimLoadingBarService.stop();
        },
      )
    );
  }
}
