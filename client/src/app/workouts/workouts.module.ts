import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent, MyWorkoutComponent, DetailsComponent],
  imports: [CommonModule, WorkoutRoutingModule],
  exports: [CatalogComponent],
})
export class WorkoutsModule {}
