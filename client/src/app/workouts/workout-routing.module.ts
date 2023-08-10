import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { DetailsComponent } from './details/details.component';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   showAfterAuth: false
    // }
  },
  {
    path: 'my-workout',
    component: MyWorkoutComponent,
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'details/:workoutId',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutingModule {}
