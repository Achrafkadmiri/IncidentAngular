import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStageAdminComponent } from './demande-stage-admin.component';

describe('DemandeStageAdminComponent', () => {
  let component: DemandeStageAdminComponent;
  let fixture: ComponentFixture<DemandeStageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeStageAdminComponent]
    });
    fixture = TestBed.createComponent(DemandeStageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
