import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieciochoavoComponent } from './dieciochoavo.component';

describe('DieciochoavoComponent', () => {
  let component: DieciochoavoComponent;
  let fixture: ComponentFixture<DieciochoavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieciochoavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieciochoavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
