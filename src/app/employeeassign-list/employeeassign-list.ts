import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeAssignService, EmployeeAssign } from '../services/employeeassign';

@Component({
  selector: 'app-employeeassign-list',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './employeeassign-list.html',
  styleUrls: ['./employeeassign-list.css']
})
export class EmployeeAssignList {
  employees: EmployeeAssign[] = [];
  p: number = 1;
  searchText: string = '';

  constructor(private employeeService: EmployeeAssignService) {
    this.employeeService.employees$.subscribe((data: EmployeeAssign[]) => {
      this.employees = data;
    });
  }

  addNewEmployee() {
    this.employeeService.addRandomEmployee();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  clearAllEmployees() {
    this.employeeService.clearEmployees();
  }

  filterData() {
    this.employees = this.employeeService.employeesSubject.value.filter((emp: EmployeeAssign) =>
      emp.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
