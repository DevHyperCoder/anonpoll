import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

@NgModule({
  declarations: [ViewPollComponent, PollDetailComponent],
  imports: [CommonModule],
})
export class ViewPollModule {}
