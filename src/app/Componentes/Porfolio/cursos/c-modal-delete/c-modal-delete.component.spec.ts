import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModalDeleteComponent } from './c-modal-delete.component';

describe('CModalDeleteComponent', () => {
  let component: CModalDeleteComponent;
  let fixture: ComponentFixture<CModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
