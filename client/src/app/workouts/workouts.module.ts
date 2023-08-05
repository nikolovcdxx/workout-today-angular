import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [CatalogComponent],
})
export class WorkoutsModule {}
