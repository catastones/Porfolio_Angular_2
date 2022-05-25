import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleditPersoComponent } from './modaledit-perso.component';

describe('ModaleditPersoComponent', () => {
  let component: ModaleditPersoComponent;
  let fixture: ComponentFixture<ModaleditPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleditPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleditPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
