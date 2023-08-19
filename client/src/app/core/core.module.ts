import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [NavigationComponent, ErrorComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent],
})
export class CoreModule {}
