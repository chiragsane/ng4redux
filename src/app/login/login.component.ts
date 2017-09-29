import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {

    this.loginForm = formBuilder.group({
      'username': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])]
    });
  }
  onSubmit(formValue) {
    this.userService.loadUser(formValue);
  }
  ngOnInit() {
  }
}
