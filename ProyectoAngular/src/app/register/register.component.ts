import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from './../User';
import { UserAuthService } from '../user-auth.service';



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

  constructor(private authService: UserAuthService) {}

  ngOnInit() {
    // Form control instances
    this.signupForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
    });
  }

  callRegisterService() {
    // We pass the form's parameters to the user object.
    console.log('Username: ' + this.signupForm['username']);
    this.user.name = this.signupForm['username'];
    this.user.password = this.signupForm['email'];
    this.user.email = this.signupForm['email'];

    // We pass the user object to the auth service.



  }

}
