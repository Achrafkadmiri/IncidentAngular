import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOffreStageComponent } from './admin-offre-stage.component';

describe('AdminOffreStageComponent', () => {
  let component: AdminOffreStageComponent;
  let fixture: ComponentFixture<AdminOffreStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOffreStageComponent]
    });
    fixture = TestBed.createComponent(AdminOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
