import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecruteurComponent } from './register-recruteur.component';

describe('RegisterRecruteurComponent', () => {
  let component: RegisterRecruteurComponent;
  let fixture: ComponentFixture<RegisterRecruteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterRecruteurComponent]
    });
    fixture = TestBed.createComponent(RegisterRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
