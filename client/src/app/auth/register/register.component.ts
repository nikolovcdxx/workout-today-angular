import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  submitHandler(form: NgForm): void {
    const {
      username,
      password,
      repass,
    }: { username: string; password: string; repass: string } = form.value;

    this.authService
      .register(username, password, repass)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
