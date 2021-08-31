import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  authUser(user: any) {
    debugger
    let UserArry = [];
    if (localStorage.getItem('users')) {
      UserArry = JSON.parse(localStorage.getItem('users') || '{}');
    }
    return UserArry.find((p: { username: any; password: any; }) =>p.username === user.username && p.password === user.password)
  }

}