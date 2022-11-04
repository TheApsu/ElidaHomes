import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieciseisavoComponent } from './dieciseisavo.component';

describe('DieciseisavoComponent', () => {
  let component: DieciseisavoComponent;
  let fixture: ComponentFixture<DieciseisavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieciseisavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieciseisavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
