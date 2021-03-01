import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService} from '../employee.service';
import { AuthService } from '../auth.service';

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
    //this.setMessage();
  }

}
