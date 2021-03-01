import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { RouterModule,Router } from '@angular/router';
import {EmployeeService} from '../employee.service';

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

  model = new Employee('', '','', this.designations[0],'','');

  submitted = false;
  onSubmit() { this.submitted = true;
    this.newEmployee()
    console.log(this.model)
   }

  newEmployee() {
    this.model.dateOfJoining = new Date(this.model.dateOfJoining).toLocaleDateString();
    this.employeeservice.saveEmployee(this.model)
    this.router.navigate(["/employeedirectory"])
    console.log(this.employees)
  }



}