import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee {
  employees: any[] = [];
  filter: string = '';

  constructor(private employeeService: EmployeeService) {}





  ngOnInit(): void {
    this.showEmployees();
  }

  onFilterChange(event: any) {
    this.filter = event.target.value;
    this.showEmployees();
  }

  showEmployees() {
    if (this.filter === 'male') {
      this.employees = this.employeeService.getMaleEmployees();
    } else if (this.filter === 'female') {
      this.employees = this.employeeService.getFemaleEmployees();
    } else {
      this.employees = this.employeeService.getAllEmployees();
    }
  }
}
