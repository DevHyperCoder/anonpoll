import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { WidthDirective } from './width.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, WidthDirective, FooterComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, WidthDirective,FooterComponent],
})
export class CoreModule {}
