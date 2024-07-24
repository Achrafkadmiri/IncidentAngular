import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurAdminComponent } from './recruteur-admin.component';

describe('RecruteurAdminComponent', () => {
  let component: RecruteurAdminComponent;
  let fixture: ComponentFixture<RecruteurAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruteurAdminComponent]
    });
    fixture = TestBed.createComponent(RecruteurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
