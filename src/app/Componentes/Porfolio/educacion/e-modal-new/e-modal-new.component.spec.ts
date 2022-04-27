import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalNewComponent } from './e-modal-new.component';

describe('EModalNewComponent', () => {
  let component: EModalNewComponent;
  let fixture: ComponentFixture<EModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
