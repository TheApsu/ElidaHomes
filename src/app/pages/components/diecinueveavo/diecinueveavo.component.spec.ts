import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiecinueveavoComponent } from './diecinueveavo.component';

describe('DiecinueveavoComponent', () => {
  let component: DiecinueveavoComponent;
  let fixture: ComponentFixture<DiecinueveavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiecinueveavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiecinueveavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
