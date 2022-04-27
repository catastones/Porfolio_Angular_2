import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModalEditComponent } from './lmodal-edit.component';

describe('LModalEditComponent', () => {
  let component: LModalEditComponent;
  let fixture: ComponentFixture<LModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
