import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeintiunavoComponent } from './veintiunavo.component';

describe('VeintiunavoComponent', () => {
  let component: VeintiunavoComponent;
  let fixture: ComponentFixture<VeintiunavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeintiunavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeintiunavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
