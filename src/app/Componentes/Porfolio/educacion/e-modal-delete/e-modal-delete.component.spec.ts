import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalDeleteComponent } from './e-modal-delete.component';

describe('EModalDeleteComponent', () => {
  let component: EModalDeleteComponent;
  let fixture: ComponentFixture<EModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
