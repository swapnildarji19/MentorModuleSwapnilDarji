import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [];
  //private auth: '' ='';

  getEmployees(): Employee[] {
    return this.employees;
  }

  saveEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
