import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenSectionComponent } from './teen-section.component';

describe('TeenSectionComponent', () => {
  let component: TeenSectionComponent;
  let fixture: ComponentFixture<TeenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeenSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
