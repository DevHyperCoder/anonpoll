import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-poll-option-input',
  templateUrl: './poll-option-input.component.html',
})
export class PollOptionInputComponent {
  @Input()
  formControl!: FormControl;

  @Input()
  options!: FormArray;

  addOption() {
    this.options.push(
      this.fb.control(`Option ${this.options.length + 1}`, [Validators.required])
    );
  }

  canMoveUp(i: number) {
    return i !== 0 
  }

  canMoveDown(i: number) {
    return i < this.options.length -1
  }

  get canDelete()  {
    return this.options.length > 2
  }

  deleteOption(i: number) {
    if (!this.canDelete) return;
    this.options.removeAt(i)
  }

  moveOptionUp(i: number) {
    this.move(i, -1);
  }

  moveOptionDown(i: number) {
    this.move(i, 1);
  }

  move(i: number, shiftBy: number) {
    let newIndex = i + shiftBy;

    if (newIndex === -1) {
      newIndex = this.options.length - 1;
    } else if (newIndex == this.options.length) {
      newIndex = 0;
    }

    const currentGroup = this.options.at(i);
    this.options.removeAt(i);
    this.options.insert(newIndex, currentGroup);
  }

  get optionsControls() {
    return this.options.controls as FormControl[];
  }

  constructor(private fb: FormBuilder) {}
}
