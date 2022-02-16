import { Component, Input, OnInit } from '@angular/core';
import { Faq } from 'src/app/core/models/faq.model';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css'],
})
export class FaqItemComponent implements OnInit {
  @Input()
  faq!: Faq;

  constructor() {}

  ngOnInit(): void {}
}
