import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethSectionComponent } from './nineth-section.component';

describe('NinethSectionComponent', () => {
  let component: NinethSectionComponent;
  let fixture: ComponentFixture<NinethSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinethSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinethSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
