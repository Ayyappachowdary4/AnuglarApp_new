import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math1Demo } from './math1-demo';

describe('Math1Demo', () => {
  let component: Math1Demo;
  let fixture: ComponentFixture<Math1Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math1Demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Math1Demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
