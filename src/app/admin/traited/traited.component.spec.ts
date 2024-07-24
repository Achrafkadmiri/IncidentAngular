import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitedComponent } from './traited.component';

describe('TraitedComponent', () => {
  let component: TraitedComponent;
  let fixture: ComponentFixture<TraitedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraitedComponent]
    });
    fixture = TestBed.createComponent(TraitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
