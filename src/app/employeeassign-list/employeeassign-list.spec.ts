import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeassignList } from './employeeassign-list';

describe('EmployeeassignList', () => {
  let component: EmployeeassignList;
  let fixture: ComponentFixture<EmployeeassignList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeassignList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeassignList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
