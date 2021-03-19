import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string= '';

  login() {
    var token = localStorage.getItem("isLoggedIn");
    if (token == 'true') {
      return true;
    }
    else {
      return false;
    }
  }

  logout() : void {
    localStorage.setItem("isLoggedIn",'false')
    location.reload()
  }
}