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
        question: 'Does anonpoll collect user data',
        answer: 'No it does not! Our code is on github if you want to check',
      },
      {
        question: 'Does anonpoll collect user data',
        answer: 'No it does not! Our code is on github if you want to check',
      },
      {
        question: 'Does anonpoll collect user data',
        answer: 'No it does not! Our code is on github if you want to check',
      },
      {
        question: 'Does anonpoll collect user data',
        answer: 'No it does not! Our code is on github if you want to check',
      },
    ];
  }
}
