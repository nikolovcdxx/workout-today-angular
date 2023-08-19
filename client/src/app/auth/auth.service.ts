import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from '../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;

  USER_KEY = 'auth';
  isUser: string | null = localStorage.getItem('auth');

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(username: string, password: string) {
    return this.http
      .post<User>('/api/users/login', { username, password })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  register(username: string, password: string, repass: string) {
    return this.http
      .post<User>('/api/users/register', {
        username,
        password,
        repass,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  logout() {
    return this.http.get<User>('/api/users/logout', {}).pipe(
      tap(() => {
        debugger
        this.user$$.next(undefined);
        this.isUser = null;
        localStorage.clear();
      })
    );
  }

  getUser() {
    return this.isUser === null
      ? this.user
      : this.user$$.next(JSON.parse(this.isUser));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
