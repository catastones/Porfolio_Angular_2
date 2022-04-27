import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModalDeleteComponent } from './lmodal-delete.component';

describe('LModalDeleteComponent', () => {
  let component: LModalDeleteComponent;
  let fixture: ComponentFixture<LModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
