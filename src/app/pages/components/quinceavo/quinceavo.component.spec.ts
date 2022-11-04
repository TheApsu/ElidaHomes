import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinceavoComponent } from './quinceavo.component';

describe('QuinceavoComponent', () => {
  let component: QuinceavoComponent;
  let fixture: ComponentFixture<QuinceavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinceavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinceavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
