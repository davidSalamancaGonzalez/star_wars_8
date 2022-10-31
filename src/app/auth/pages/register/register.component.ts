import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private AuthService: AuthService ) { }

  ngOnInit(): void {}

  
  name : string = "([a-zA-z]+)"
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  registerForm: FormGroup = this.fb.group({
    first_name   : ['', [ Validators.required, Validators.minLength(3), Validators.pattern(this.name) ] ],
    last_name    : ['', [ Validators.required, Validators.min(2), Validators.pattern(this.name) ] ],
        email    : ['', [ Validators.required, Validators.pattern(this.emailPattern)  ] ],
        password : ['', [ Validators.required ]]
  })

  required( field : string){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched
  }

  saveUser(){
    if( this.registerForm.invalid){
      this.registerForm.markAllAsTouched(); 
      return;
    }
    console.log(this.registerForm.value);
    this.AuthService.insertUser(this.registerForm.value)
    .subscribe(resp => {
      console.log("respuesta", resp);
    })
   
    this.registerForm.reset()
    this.router.navigate(["/main"])
  }

}
