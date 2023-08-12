import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { MyWorkoutComponent } from './my-workout/my-workout.component';
import { DetailsComponent } from './details/details.component';
import { DetailsPushComponent } from './details/details-push/details-push.component';
import { DetailsPullComponent } from './details/details-pull/details-pull.component';
import { DetailsLegsComponent } from './details/details-legs/details-legs.component';
import { MyWorkoutPushComponent } from './my-workout/my-workout-push/my-workout-push.component';
import { MyWorkoutPullComponent } from './my-workout/my-workout-pull/my-workout-pull.component';
import { MyWorkoutLegsComponent } from './my-workout/my-workout-legs/my-workout-legs.component';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent, MyWorkoutComponent, DetailsComponent, DetailsPushComponent, DetailsPullComponent, DetailsLegsComponent, MyWorkoutPushComponent, MyWorkoutPullComponent, MyWorkoutLegsComponent],
  imports: [CommonModule, WorkoutRoutingModule],
  exports: [CatalogComponent],
})
export class WorkoutsModule {}
