import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnModalEditComponent } from './en-modal-edit.component';

describe('EnModalEditComponent', () => {
  let component: EnModalEditComponent;
  let fixture: ComponentFixture<EnModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
