import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSelectionComponent } from './create-selection/create-selection.component';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';
import { LegsComponent } from './legs/legs.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CreateSelectionComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path: 'push',
    component: PushComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pull',
    component: PullComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'legs',
    canActivate: [AuthGuard],
    component: LegsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
