import { Component } from '@angular/core';
import { User } from '../user';
import { NavigationExtras,Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  //message: string;

  constructor(public authService: AuthService, public router: Router) {
    //this.setMessage();
  }

  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }

  model = new User('','');  

  submitted = false;

  onSubmit() {
    if (this.model.uname == 'swapnil' && this.model.upass =='qwerty')
    {
    this.login()
    //this.router.navigate(["/employeedirectory"])
    // this.authServiceService.onLogin()
    }
    else{
      this.submitted = true;

    }
  }

  login() {
    //this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      //this.setMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/employeedirectory';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    //this.setMessage();
  }
}