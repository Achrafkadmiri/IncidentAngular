import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCandidatComponent } from './register-candidat.component';

describe('RegisterCandidatComponent', () => {
  let component: RegisterCandidatComponent;
  let fixture: ComponentFixture<RegisterCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCandidatComponent]
    });
    fixture = TestBed.createComponent(RegisterCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
