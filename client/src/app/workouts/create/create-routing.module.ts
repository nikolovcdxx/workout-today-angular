import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSelectionComponent } from './create-selection/create-selection.component';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';
import { LegsComponent } from './legs/legs.component';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    component: CreateSelectionComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   showAfterAuth: false
    // }
  },
  {
    path: 'push',
    component: PushComponent,
  },
  {
    path: 'pull',
    component: PullComponent,
  },
  {
    path: 'legs',
    component: LegsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
