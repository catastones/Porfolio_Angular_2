import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELaboralComponent } from './e-laboral.component';

describe('ELaboralComponent', () => {
  let component: ELaboralComponent;
  let fixture: ComponentFixture<ELaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
