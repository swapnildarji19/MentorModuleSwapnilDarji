import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { RouterModule,Router } from '@angular/router';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  employees : Array<Employee> = [];

  constructor(
    private router: Router,
    private employeeservice: EmployeeService ){}
  
  designations = ['Tester', 'Developer'];

  model = new Employee('', '','', this.designations[0],'',new Date());

  submitted = false;
  onSubmit() { this.submitted = true;
    this.newEmployee()
   }

  newEmployee() {
    this.model.dateOfJoining = new Date(this.model.dateOfJoining);
    this.employeeservice.saveEmployee(this.model)
    this.router.navigate(["/employeedirectory"])
  }



}