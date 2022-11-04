import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthSectionComponent } from './twelfth-section.component';

describe('TwelfthSectionComponent', () => {
  let component: TwelfthSectionComponent;
  let fixture: ComponentFixture<TwelfthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelfthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelfthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
