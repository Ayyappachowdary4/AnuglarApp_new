import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EmployeeAssign {
  id: number;
  name: string;
  role: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeAssignService {
  // Full employee objects
  private allEmployees: EmployeeAssign[] = [
    { id: 1, name: 'Murali D', role: 'Developer', salary: 50000 },
    { id: 2, name: 'Rama Teja', role: 'Tester', salary: 45000 },
    { id: 3, name: 'Ashok C', role: 'Developer', salary: 52000 },
    { id: 4, name: 'Karthick K', role: 'Designer', salary: 48000 }
  ];

  // BehaviorSubject to hold current employees
  public employeesSubject = new BehaviorSubject<EmployeeAssign[]>([]);
  public employees$ = this.employeesSubject.asObservable();

  constructor() {
    // Start with first 2 employees
    this.employeesSubject.next(this.allEmployees.slice(0, 2));
  }

  // Add a new employee object
  addEmployee(emp: EmployeeAssign) {
    this.employeesSubject.next([...this.employeesSubject.value, emp]);
  }

  // Add a random employee from allEmployees
  addRandomEmployee() {
    const currentIds = this.employeesSubject.value.map(e => e.id);
    const available = this.allEmployees.filter(e => !currentIds.includes(e.id));
    if (available.length === 0) return;

    this.addEmployee(available[0]); // pick the first available employee
  }

  // Delete employee by id
  deleteEmployee(id: number) {
    this.employeesSubject.next(this.employeesSubject.value.filter(emp => emp.id !== id));
  }

  // Clear all employees
  clearEmployees() {
    this.employeesSubject.next([]);
  }
}
