import { Injectable } from '@angular/core';
import { Feature } from '../core/models/feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor() {}

  get features(): Feature[] {
    return [
      {
        imgName: 'anonymous.svg',
        text: 'Ask and share anonymously',
      },
      {
        imgName: 'chart.svg',
        text: 'Live updates',
      },
    ];
  }
}
