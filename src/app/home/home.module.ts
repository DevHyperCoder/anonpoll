import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FaqComponent } from './faq/faq.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureItemComponent } from './feature-item/feature-item.component';

@NgModule({
  declarations: [HomeComponent, FaqComponent, FaqItemComponent, FeatureComponent, FeatureItemComponent],
  imports: [CommonModule],
})
export class HomeModule {}
