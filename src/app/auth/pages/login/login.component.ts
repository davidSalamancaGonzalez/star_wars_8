import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

error:string = "";

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required]]
  })

  required(field: string) {
    if(this.error != ''){
      return 
    }
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched
  }

  loginFront() {

    if(this.loginForm.valid) {

      const {email , password } = this.loginForm.value;

      this.authService.login(email , password)
      .subscribe(resp  => {
        if(resp != undefined){
          this.error = resp.error
        }
        this.router.navigate(['/ships/listado']); 
      })
    } else {
      this.loginForm.markAllAsTouched()
  
    }}

}









