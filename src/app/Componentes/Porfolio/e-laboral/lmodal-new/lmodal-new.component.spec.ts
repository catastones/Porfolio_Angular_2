import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModalNewComponent } from './lmodal-new.component';

describe('LModalNewComponent', () => {
  let component: LModalNewComponent;
  let fixture: ComponentFixture<LModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
