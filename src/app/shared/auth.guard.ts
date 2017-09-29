import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, CanActivate } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {

  user: User;
  private subscription: Subscription;
  constructor(private userService: UserService, private router: Router) {
    this.subscription = this.userService.user.subscribe(user => {
      this.user = user;
    })
  }

  canActivate() {
    if (this.user.name !== 'xyz') {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
