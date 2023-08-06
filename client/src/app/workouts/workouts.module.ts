import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { WorkoutRoutingModule } from './workout-routing.module';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent],
  imports: [CommonModule, RouterModule, WorkoutRoutingModule],
  exports: [CatalogComponent],
})
export class WorkoutsModule {}
