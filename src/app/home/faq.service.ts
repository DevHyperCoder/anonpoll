import { Injectable } from '@angular/core';
import { Faq } from '../core/models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor() {}

  get faqs(): Faq[] {
    return [
      {
        question: 'Does anonpoll collect user data ?',
        answer: 'No it does not! Our code is on github if you want to check',
      },
      {
        question: 'Can a poll have multiple questions ?',
        answer: 'No. That would be a survey. A survey app might be coming soon!',
      },
    ];
  }
}
