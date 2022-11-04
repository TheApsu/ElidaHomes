import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtySectionComponent } from './sixty-section.component';

describe('SixtySectionComponent', () => {
  let component: SixtySectionComponent;
  let fixture: ComponentFixture<SixtySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixtySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
