import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatAdminComponent } from './candidat-admin.component';

describe('CandidatAdminComponent', () => {
  let component: CandidatAdminComponent;
  let fixture: ComponentFixture<CandidatAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatAdminComponent]
    });
    fixture = TestBed.createComponent(CandidatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
