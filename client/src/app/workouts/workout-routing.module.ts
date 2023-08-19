import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth/auth.guard';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'my-workout',
    component: MyWorkoutComponent,
    canActivate: [AuthGuard],

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
  {
    path: 'edit/:workoutId',
    component: EditComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutingModule {}
