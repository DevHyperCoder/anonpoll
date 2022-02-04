import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ViewPollComponent, PollDetailComponent],
  imports: [CoreModule, CommonModule],
})
export class ViewPollModule { }
