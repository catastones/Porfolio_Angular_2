import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalEditComponent } from './e-modal-edit.component';

describe('EModalEditComponent', () => {
  let component: EModalEditComponent;
  let fixture: ComponentFixture<EModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
