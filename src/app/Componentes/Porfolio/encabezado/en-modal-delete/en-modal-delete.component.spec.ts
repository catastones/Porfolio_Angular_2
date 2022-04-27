import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnModalDeleteComponent } from './en-modal-delete.component';

describe('EnModalDeleteComponent', () => {
  let component: EnModalDeleteComponent;
  let fixture: ComponentFixture<EnModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
