import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeinteavoComponent } from './veinteavo.component';

describe('VeinteavoComponent', () => {
  let component: VeinteavoComponent;
  let fixture: ComponentFixture<VeinteavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeinteavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeinteavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
