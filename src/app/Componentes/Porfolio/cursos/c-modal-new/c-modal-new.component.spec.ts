import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModalNewComponent } from './c-modal-new.component';

describe('CModalNewComponent', () => {
  let component: CModalNewComponent;
  let fixture: ComponentFixture<CModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModalNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
