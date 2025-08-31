import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoassignment } from './todoassignment';

describe('Todoassignment', () => {
  let component: Todoassignment;
  let fixture: ComponentFixture<Todoassignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoassignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoassignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
