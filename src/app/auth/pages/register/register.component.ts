import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm:FormGroup = new FormGroup({
    'fName': new FormControl(''),
    'lName': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl('')

  })


}
