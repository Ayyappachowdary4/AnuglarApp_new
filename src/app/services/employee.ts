import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { id: 1, name: 'Murali Dadi', gender: 'Male', role: 'Intern' },
    { id: 2, name: 'Sanjay', gender: 'Male', role: 'Instructor' },
    { id: 3, name: 'NTR', gender: 'Male', role: 'Actor' },
    { id: 4, name: 'Samantha', gender: 'Female', role: 'Actor' },
    { id: 5, name: 'Kajal', gender: 'Female', role: 'Actor' }
  ];

  getAllEmployees() {
    return this.employees;
  }

  getMaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'Male');
  }

  getFemaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'Female');
  }
}
