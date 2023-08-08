import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSelectionComponent } from './create-selection/create-selection.component';
import { CreateRoutingModule } from './create-routing.module';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';
import { LegsComponent } from './legs/legs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateSelectionComponent, PushComponent, PullComponent, LegsComponent],
  imports: [CommonModule, CreateRoutingModule, ReactiveFormsModule],
  exports: [CreateSelectionComponent],
})
export class CreateModule {}
