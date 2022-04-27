import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SModalEditComponent } from './s-modal-edit.component';

describe('SModalEditComponent', () => {
  let component: SModalEditComponent;
  let fixture: ComponentFixture<SModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
