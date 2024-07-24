import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIncidentTraitedComponent } from './chart-incident-traited.component';

describe('ChartIncidentTraitedComponent', () => {
  let component: ChartIncidentTraitedComponent;
  let fixture: ComponentFixture<ChartIncidentTraitedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartIncidentTraitedComponent]
    });
    fixture = TestBed.createComponent(ChartIncidentTraitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
