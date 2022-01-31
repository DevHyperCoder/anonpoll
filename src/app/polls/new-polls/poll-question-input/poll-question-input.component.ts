import { Component, Input,  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-question-input',
  templateUrl: './poll-question-input.component.html',
})
export class PollQuestionInputComponent {
  @Input()
  formControl!: FormControl;

  get questionErrors() {
    return this.formControl.errors;
  }

  constructor() {}

}
