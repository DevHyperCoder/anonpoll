import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { PollService } from '../../poll.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
})
export class NewPollComponent {
  poll = this.service.getEmptyPoll();
  creatingPoll: string | 'process' | '' = '';
  currentLocation = window.location.origin;

  pollForm = this.fb.group({
    question: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    options: this.fb.array([
      this.fb.control('', [Validators.required, Validators.minLength(5)]),
    ]),
  });

  get getNewPollId() {
    if (this.creatingPoll === '' || this.creatingPoll === 'process') {
      return undefined;
    }
    return this.creatingPoll;
  }

  get questionFormControl() {
    return this.pollForm.get('question') as FormControl;
  }

  get optionFormControl() {
    return this.pollForm.get('options') as FormControl;
  }

  get options() {
    return this.pollForm.get('options') as FormArray;
  }

  async createPoll() {
    this.creatingPoll = 'process';
    const { valid, value, errors } = this.pollForm;
    console.log({
      valid,
      value,
      errors,
    });

    value.options = value.options.map((a: string) => {
      return {
        option: a,
        votes: 0,
      };
    });

    this.poll = { ...value };
    const doc = await this.service.createPoll(this.poll);
    this.creatingPoll = doc.id;
  }

  constructor(
    private service: PollService,
    private fb: FormBuilder,
    private clipboard: ClipboardService
  ) {}

  get createdPollLink() {
    return `${this.currentLocation}/poll/${this.creatingPoll}`;
  }

  copyNewPollLocationToClipboard() {
    this.clipboard.copy(this.createdPollLink);
  }
}
