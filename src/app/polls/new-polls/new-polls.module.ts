import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll/new-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollQuestionInputComponent } from './poll-question-input/poll-question-input.component';
import { PollOptionInputComponent } from './poll-option-input/poll-option-input.component';

@NgModule({
  declarations: [
    NewPollComponent,
    PollQuestionInputComponent,
    PollOptionInputComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NewPollsModule {}
