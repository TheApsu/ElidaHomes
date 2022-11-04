import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhSectionComponent } from './eleventh-section.component';

describe('EleventhSectionComponent', () => {
  let component: EleventhSectionComponent;
  let fixture: ComponentFixture<EleventhSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleventhSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleventhSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
