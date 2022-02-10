import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { WidthDirective } from './width.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, WidthDirective],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, WidthDirective],
})
export class CoreModule {}
