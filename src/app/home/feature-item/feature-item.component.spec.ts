import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItemComponent } from './feature-item.component';

describe('FeatureItemComponent', () => {
  let component: FeatureItemComponent;
  let fixture: ComponentFixture<FeatureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
