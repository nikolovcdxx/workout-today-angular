// import {
//   HTTP_INTERCEPTORS,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable, Provider } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, catchError } from 'rxjs';
// import { environment } from './environments/environment';
// import { AuthService } from './auth/auth.service';



// const { apiUrl } = environment;

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private router: Router, private authService: AuthService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     req = req.clone({
//       setHeaders: {
//         'X-Authorization': `${this.authService.accessToken}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     return next.handle(req).pipe(
//       catchError((err) => {
//         // if (err.status === 401) {
//         //   this.router.navigate(['/auth/login']);
//         // } else {
//         //   this.errorService.setError(err);
//         //   this.router.navigate(['/error']);
//         // }

//         return [err];
//       })
//     );
//   }
// }

// export const appInterceptorProvider: Provider = {
//   multi: true,
//   useClass: TokenInterceptor,
//   provide: HTTP_INTERCEPTORS,
// };
