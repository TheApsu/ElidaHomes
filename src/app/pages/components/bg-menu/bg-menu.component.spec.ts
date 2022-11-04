import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgMenuComponent } from './bg-menu.component';

describe('BgMenuComponent', () => {
  let component: BgMenuComponent;
  let fixture: ComponentFixture<BgMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
