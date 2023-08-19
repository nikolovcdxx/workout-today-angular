import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private authService: AuthService, private router: Router) {}

  usernameCap = (u: string) => {
    return u.charAt(0).toUpperCase() + u.slice(1);
  };

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  get username(): string {
    const u = this.authService.user?.username || '';
    return this.usernameCap(u);
  }

  logout(): void {
    this.authService.logout();
  }
}
