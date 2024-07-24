import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTraitedComponent } from './no-traited.component';

describe('NoTraitedComponent', () => {
  let component: NoTraitedComponent;
  let fixture: ComponentFixture<NoTraitedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTraitedComponent]
    });
    fixture = TestBed.createComponent(NoTraitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
