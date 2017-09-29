import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    });
    console.log(this.user)
  }

}
