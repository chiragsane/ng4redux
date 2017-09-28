import { Injectable } from '@angular/core';
// import { UserService } from './user.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  User = {
    exists: false
  }
  constructor(private router: Router) { }

  canActivate() {
    if (this.User.exists) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
