import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AModalDeleteComponent } from './a-modal-delete.component';

describe('AModalDeleteComponent', () => {
  let component: AModalDeleteComponent;
  let fixture: ComponentFixture<AModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
