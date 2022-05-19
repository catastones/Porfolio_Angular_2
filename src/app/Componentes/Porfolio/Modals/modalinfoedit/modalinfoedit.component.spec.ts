import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinfoeditComponent } from './modalinfoedit.component';

describe('ModalinfoeditComponent', () => {
  let component: ModalinfoeditComponent;
  let fixture: ComponentFixture<ModalinfoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalinfoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalinfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
