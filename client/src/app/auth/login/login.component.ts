import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  
  submitHandler(form: NgForm): void {

    const { username, password }: { username: string; password: string } =
      form.value;
      
      this.authService.login(username, password).subscribe((result) => {
        this.router.navigate(['/workouts/catalog']);
        
      });
  }
}
