import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  route;
  constructor(private authService: AuthService, private injector: Injector) {
    this.route = this.injector.get(Router);
  }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.getToken(),
        'X-Totvs-No-Error': 'true'
      }
    });

    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));

  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    if (err.status === 401) {
        this.route.navigateByUrl('/initial-page');
        return of(err.message);
    }

    return throwError(err);

  }

}
