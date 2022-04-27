import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AModalEditComponent } from './a-modal-edit.component';

describe('AModalEditComponent', () => {
  let component: AModalEditComponent;
  let fixture: ComponentFixture<AModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
