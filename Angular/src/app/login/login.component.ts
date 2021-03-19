import { Component } from '@angular/core';
import { User } from '../models/user';
import { NavigationExtras,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    public authService: AuthService,
     public router: Router,
     private http: HttpClient){}

  model = new User('',''); 

  submitted = false;

  onSubmit() {

    const credentials ={
      'username' : this.model.uname,
      'password' : this.model.upass
    }

    this.http.post("https://localhost:44355/api/auth/login",credentials)
    .subscribe(response => {
      localStorage.setItem("isLoggedIn",'true');
      this.router.navigate(['/employeedirectory']);
    }, err => {
      this.submitted = true;
    })
  }

  logout() {
    this.authService.logout();
  }
}
