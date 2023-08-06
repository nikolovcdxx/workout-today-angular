import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent {
  isAuthenticating = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.getUser()) {
      this.isAuthenticating = false;
    }
  }
}
