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
 
  private allEmployees: EmployeeAssign[] = [
    { id: 1, name: 'Murali D', role: 'Developer', salary: 50000 },
    { id: 2, name: 'Rama Teja', role: 'Tester', salary: 45000 },
    { id: 3, name: 'Ashok C', role: 'Developer', salary: 52000 },
    { id: 4, name: 'Karthick K', role: 'Designer', salary: 48000 },
    { id: 5, name: 'Virat M', role: 'Cricketer', salary: 68000 },
    { id: 6, name: 'Dhoni MS', role: 'Barber', salary: 2000 },
    { id: 7, name: 'NTR', role: 'Hero', salary: 10008000 },
    { id: 8, name: 'CBN', role: 'Politican', salary: 5098000 }
  ];

  public employeesSubject = new BehaviorSubject<EmployeeAssign[]>([]);
  public employees$ = this.employeesSubject.asObservable();    // -----so this is doing  BehaviorSubject to hold current employees

  constructor() {
    
    this.employeesSubject.next(this.allEmployees.slice(0, 4)); // -----so this is Start with first 2 employees
  }

  
  addEmployee(emp: EmployeeAssign) {
    this.employeesSubject.next([...this.employeesSubject.value, emp]);//// -----so this Add a new employee object
  }

 
  addRandomEmployee() {
    const currentIds = this.employeesSubject.value.map(e => e.id);
    const available = this.allEmployees.filter(e => !currentIds.includes(e.id));///this method is doing random employee from all employess
    if (available.length === 0) return;

    this.addEmployee(available[0]); //this will  pick the first available employee
  }

  
  deleteEmployee(id: number) {
    this.employeesSubject.next(this.employeesSubject.value.filter(emp => emp.id !== id));
  }


  clearEmployees() {
    this.employeesSubject.next([]);
  }
}
