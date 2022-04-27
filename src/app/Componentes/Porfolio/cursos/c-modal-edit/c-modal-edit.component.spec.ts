import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModalEditComponent } from './c-modal-edit.component';

describe('CModalEditComponent', () => {
  let component: CModalEditComponent;
  let fixture: ComponentFixture<CModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
