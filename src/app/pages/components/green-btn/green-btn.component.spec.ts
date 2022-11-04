import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBtnComponent } from './green-btn.component';

describe('GreenBtnComponent', () => {
  let component: GreenBtnComponent;
  let fixture: ComponentFixture<GreenBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
