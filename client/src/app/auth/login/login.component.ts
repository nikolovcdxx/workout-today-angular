import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitHandler(form: NgForm): void {
    const value: { username: string, password: string } = form.value;
    console.log(value.username, value.password);
    
  }
}
