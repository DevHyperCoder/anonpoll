import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/core/models/faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs: Faq[];
  constructor(private service: FaqService) {
    this.faqs = this.service.faqs;
    console.log(this.faqs);
  }

  ngOnInit(): void {}
}
