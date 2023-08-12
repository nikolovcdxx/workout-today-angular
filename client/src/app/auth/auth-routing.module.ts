import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   showAfterAuth: false
    // }
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   showAfterAuth: false
    // }
  },
  { path: 'logout', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
