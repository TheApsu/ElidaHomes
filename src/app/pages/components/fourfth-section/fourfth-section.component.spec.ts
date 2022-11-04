import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourfthSectionComponent } from './fourfth-section.component';

describe('FourfthSectionComponent', () => {
  let component: FourfthSectionComponent;
  let fixture: ComponentFixture<FourfthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourfthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourfthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
