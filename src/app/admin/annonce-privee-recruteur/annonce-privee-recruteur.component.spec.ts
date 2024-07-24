import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePriveeRecruteurComponent } from './annonce-privee-recruteur.component';

describe('AnnoncePriveeRecruteurComponent', () => {
  let component: AnnoncePriveeRecruteurComponent;
  let fixture: ComponentFixture<AnnoncePriveeRecruteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncePriveeRecruteurComponent]
    });
    fixture = TestBed.createComponent(AnnoncePriveeRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
