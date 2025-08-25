import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math2Demo } from './math2-demo';

describe('Math2Demo', () => {
  let component: Math2Demo;
  let fixture: ComponentFixture<Math2Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math2Demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Math2Demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
