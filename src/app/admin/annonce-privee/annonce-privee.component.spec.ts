import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePriveeComponent } from './annonce-privee.component';

describe('AnnoncePriveeComponent', () => {
  let component: AnnoncePriveeComponent;
  let fixture: ComponentFixture<AnnoncePriveeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncePriveeComponent]
    });
    fixture = TestBed.createComponent(AnnoncePriveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
