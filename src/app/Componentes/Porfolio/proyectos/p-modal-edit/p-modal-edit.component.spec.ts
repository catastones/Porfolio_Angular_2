import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PModalEditComponent } from './p-modal-edit.component';

describe('PModalEditComponent', () => {
  let component: PModalEditComponent;
  let fixture: ComponentFixture<PModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
