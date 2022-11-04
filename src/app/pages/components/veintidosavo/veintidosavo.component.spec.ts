import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeintidosavoComponent } from './veintidosavo.component';

describe('VeintidosavoComponent', () => {
  let component: VeintidosavoComponent;
  let fixture: ComponentFixture<VeintidosavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeintidosavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeintidosavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
