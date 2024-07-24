import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIncidentComponent } from './chart-incident.component';

describe('ChartIncidentComponent', () => {
  let component: ChartIncidentComponent;
  let fixture: ComponentFixture<ChartIncidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartIncidentComponent]
    });
    fixture = TestBed.createComponent(ChartIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
