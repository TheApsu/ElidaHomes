import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldLineComponent } from './gold-line.component';

describe('GoldLineComponent', () => {
  let component: GoldLineComponent;
  let fixture: ComponentFixture<GoldLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
