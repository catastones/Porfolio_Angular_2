import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SModalDeleteComponent } from './s-modal-delete.component';

describe('SModalDeleteComponent', () => {
  let component: SModalDeleteComponent;
  let fixture: ComponentFixture<SModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
