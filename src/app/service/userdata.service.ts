import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  addUser(user: any) {
    let users: any = [];
    if (localStorage.getItem('users')) {
      users = [...JSON.parse(localStorage.getItem('users') || '{}')];
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
}
