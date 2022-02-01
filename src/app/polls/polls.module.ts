import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollsModule } from './new-polls/new-polls.module';
import {ViewPollModule} from './view-poll/view-poll.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewPollsModule,ViewPollModule],
})
export class PollsModule {}
