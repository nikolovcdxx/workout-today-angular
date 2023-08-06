import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   showAfterAuth: false
    // }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutingModule {}
