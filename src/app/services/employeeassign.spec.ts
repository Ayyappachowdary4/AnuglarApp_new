import { TestBed } from '@angular/core/testing';

import { Employeeassign } from './employeeassign';

describe('Employeeassign', () => {
  let service: Employeeassign;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employeeassign);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
