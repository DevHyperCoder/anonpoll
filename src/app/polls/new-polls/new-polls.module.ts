import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll/new-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollQuestionInputComponent } from './poll-question-input/poll-question-input.component';
import { PollOptionInputComponent } from './poll-option-input/poll-option-input.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { CoreModule } from 'src/app/core/core.module';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    NewPollComponent,
    PollQuestionInputComponent,
    PollOptionInputComponent,
    FormErrorComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
})
export class NewPollsModule {}
