import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './employee-crud.html',
  styleUrls: ['./employee-crud.css']
})
export class EmployeeCrudComponent {

  
  employees = [
    { id: 1, name: 'Murali Dadi', role: 'Developer', Gender: 'M', status: 'Active' },
    { id: 2, name: 'Rama Rao', role: 'Actor', Gender : 'M', status: 'Active' },
    { id: 3, name: 'Virat Kohli', role: 'Cricketer', Gender: 'M', status: 'active' }
  ];

  
  selectedEmployee: any = null;
  newEmployee = { name: '', role: '', Gender: '', status: '' };

  constructor(private snackBar: MatSnackBar) {}

  //----------------------- Add new employee---------------------------------------------
  addEmployee() {
   const newId = this.employees.length ? this.employees[this.employees.length - 1].id + 1 : 1;
    const emp = { id: newId, ...this.newEmployee };

    this.employees.push(emp);

    this.snackBar.open('Employee Added Successfully', 'Close', { duration: 3000 });
  }

  //------------------------------ View employee details--------------------------
  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
  }

  // ----------------------------Delete employee-----------------------------------
  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employees = this.employees.filter(emp => emp.id !== id);
      this.snackBar.open('Employee Deleted Successfully', 'Close', { duration: 3000 });
    }
  }
}
