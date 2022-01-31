import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Poll } from 'src/app/core/models/poll.model';
import { PollService } from '../../poll.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
})
export class NewPollComponent implements OnInit {
  poll: Poll;
  creatingPoll: string | 'process' | '' = '';

  get getNewPollId() {
    if (this.creatingPoll === '' || this.creatingPoll === 'process') {
      return undefined;
    }
    return this.creatingPoll;
  }

  pollForm = this.fb.group({
    question: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    options: this.fb.array([
      this.fb.control('', [Validators.required, Validators.minLength(5)]),
    ]),
  });

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

    this.poll = value;
    const doc = await this.service.createPoll(this.poll);
    this.creatingPoll = doc.id;
  }

  constructor(private service: PollService, private fb: FormBuilder) {
    this.poll = this.service.getEmptyPoll();
  }

  ngOnInit(): void {}
}
