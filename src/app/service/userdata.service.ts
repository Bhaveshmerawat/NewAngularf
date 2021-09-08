import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  message: string | undefined;
  url = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    let users: any = [];
    if (localStorage.getItem('users')) {
      users = [...JSON.parse(localStorage.getItem('users') || '{}')];
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getData() {
    return this.http.get(this.url);
    //  return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  getOne(id: string | number) {
    return this.http.get(this.url + id);
  }
  saveUser(data: any) {
    //  console.warn("service",data)
    return this.http.post(this.url, data)
  }

  // getsignleUser(id: number): Observable<any> {
  //   debugger
  //   const url = `${this.url}${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => this.log(`fetched user id=${id}`)),
  //     catchError(this.handleError<any>(`getsignleUser id=${id}`))
  //   );
  // }
  // log(arg0: string): void {
  //   throw new Error('Method not implemented.');
  // }
  // handleError<T>(arg0: string): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  // }

  setMessage(data: string | undefined) {
    this.message = data
  }
  getMessage() {
    return this.message
  }

}
