import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ErrorService } from '../core/error/error.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private errorService: ErrorService, private router: Router) {}

  isLogged!: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.routeConfig?.path === 'login') {
      this.isLogged = !!localStorage.getItem('auth');
      if (this.isLogged) {
        this.errorService.err$$.next('You are already logged in !');
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'register') {
      this.isLogged = !!localStorage.getItem('auth');
      if (this.isLogged) {
        this.errorService.err$$.next(
          'You are already registered and logged in !'
        );
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'logout') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'my-workout') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'edit/:id') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'create') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'push') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'pull') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'legs') {
      this.isLogged = !!localStorage.getItem('auth');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }
    return true;
  }
}
