import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { MyWorkoutComponent } from './my-workout/my-workout.component';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent, MyWorkoutComponent],
  imports: [CommonModule, WorkoutRoutingModule],
  exports: [CatalogComponent],
})
export class WorkoutsModule {}
