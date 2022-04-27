import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PModalNewComponent } from './p-modal-new.component';

describe('PModalNewComponent', () => {
  let component: PModalNewComponent;
  let fixture: ComponentFixture<PModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PModalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
