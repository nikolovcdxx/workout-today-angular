import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { environment } from './environments/environment';
import { ErrorService } from './core/error/error.service';

const { apiUrl } = environment;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorService: ErrorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let isUser: string | null = localStorage.getItem('auth');

    if (req.url.startsWith('/api') && isUser === null) {
      req = req.clone({
        url: req.url.replace('/api', apiUrl),
      });
    } else if (req.url.startsWith('/api') && isUser !== null) {
      req = req.clone({
        url: req.url.replace('/api', apiUrl),
        setHeaders: {
          'X-Authorization': `${JSON.parse(isUser).accessToken}`,
          'Content-Type': 'application/json',
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.error.msg) {
          this.errorService.err$$.next(err.error.msg);
        } else if (err.message) {
          this.errorService.err$$.next(err.message);
        }
        // this.router.navigate(['/error'])

        // if (err.status === 401) {
        //   this.router.navigate(['/auth/login']);
        // } else {
        //   this.errorService.setError(err);
        //   this.router.navigate(['/error']);
        // }

        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: TokenInterceptor,
  provide: HTTP_INTERCEPTORS,
};
