import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnewComponent } from './modalnew.component';

describe('ModalnewComponent', () => {
  let component: ModalnewComponent;
  let fixture: ComponentFixture<ModalnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
