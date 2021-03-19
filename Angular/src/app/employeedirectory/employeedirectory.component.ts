import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService} from '../services/employee.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employeedirectory',
  templateUrl: './employeedirectory.component.html',
  styleUrls: ['./employeedirectory.component.css']
})
export class EmployeedirectoryComponent implements OnInit {

  employees : Array<Employee> = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private employeeservice: EmployeeService 
  ) { }

  ngOnInit(): void {
    this.employees = this.employeeservice.getEmployees();
  }
  goTo() {
    this.router.navigate(["/addemployee"])
  }
  logout() {
    this.authService.logout();
  }

}
