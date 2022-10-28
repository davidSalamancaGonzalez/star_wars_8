import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    ;
  }

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm: FormGroup = this.fb.group({
    email: ['tres@gmail.com', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['test', [Validators.required]]
  })

  required(field: string) {
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched
  }

  loginFront() {

    const {email , password } = this.loginForm.value;
    this.authService.login(email , password)
    .subscribe(resp  => console.log(resp.user.id))
  }
}









