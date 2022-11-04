import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftySectionComponent } from './fifty-section.component';

describe('FiftySectionComponent', () => {
  let component: FiftySectionComponent;
  let fixture: ComponentFixture<FiftySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiftySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
