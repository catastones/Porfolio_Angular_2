import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PModalDeleteComponent } from './p-modal-delete.component';

describe('PModalDeleteComponent', () => {
  let component: PModalDeleteComponent;
  let fixture: ComponentFixture<PModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
