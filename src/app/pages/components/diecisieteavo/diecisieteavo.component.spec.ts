import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiecisieteavoComponent } from './diecisieteavo.component';

describe('DiecisieteavoComponent', () => {
  let component: DiecisieteavoComponent;
  let fixture: ComponentFixture<DiecisieteavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiecisieteavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiecisieteavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
