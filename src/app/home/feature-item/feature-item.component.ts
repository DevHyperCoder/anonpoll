import { Component, Input, OnInit } from '@angular/core';
import {Feature} from 'src/app/core/models/feature.model';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css']
})
export class FeatureItemComponent implements OnInit {
  @Input()
  feature!: Feature

  constructor() { }

  ngOnInit(): void {
  }

}
