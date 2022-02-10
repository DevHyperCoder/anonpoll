import { Component, OnInit } from '@angular/core';
import {Feature} from 'src/app/core/models/feature.model';
import {FeatureService} from '../feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  features: Feature[]

  constructor(private service: FeatureService) { 
    this.features = this.service.features
  }

  ngOnInit(): void {
  }

}
