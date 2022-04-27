import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SModalNewComponent } from './s-modal-new.component';

describe('SModalNewComponent', () => {
  let component: SModalNewComponent;
  let fixture: ComponentFixture<SModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SModalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
