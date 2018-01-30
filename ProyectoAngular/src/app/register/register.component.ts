import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from './../User';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Declaring user object.
  private user: User;
  // Declaring formgroup.
  signupForm: FormGroup;

  constructor() {}

  ngOnInit() {
    // Form control instances
    this.signupForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
    });
  }

}
