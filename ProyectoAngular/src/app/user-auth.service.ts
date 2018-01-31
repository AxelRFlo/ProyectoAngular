import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class UserAuthService {
 var users = [
  {
    username: 'admin',
    password: 'password',
    email: 'admin@admin.com'
  }

 ];

  constructor() { }

  registerUser(newUser:){
    users.push(newUser);
  }

}
