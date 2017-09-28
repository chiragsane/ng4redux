import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      'username': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])]
    });
  }
  onSubmit(formValue) {
    if (formValue.username === formValue.password) {
      alert(`welcome ${formValue.username}`);
    } else {
      alert(`Invalid Credentials`);
    }
  }
  ngOnInit() {
  }
}
