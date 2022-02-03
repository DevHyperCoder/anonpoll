import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
})
export class FormErrorComponent {
  @Input()
  content!: string;

  constructor() {}
}
