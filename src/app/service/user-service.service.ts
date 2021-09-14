// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthServiceService } from './auth-service.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserServiceService {

//   private baseUrl = environment.firebaseConfig.databaseURL;

//   constructor(
//     public router: Router,
//     private http: HttpClient,
//     private firebaseService: AuthServiceService) { }



//   getAllUsers(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/users`);
//   }

//   getUserNames(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/users`);
//   }


//   getRoles(): Observable<any> {
//     // return this.http.get<any>(`${this.baseUrl}/api/v1/roles`);
//     const loggedInUserType = this.firebaseService.currentUserValue.userType.name.toLowerCase();
//     return this.http.get<any>(`${this.baseUrl}/user`)
//     .pipe(map((res: { data: { roles: any[]; }; }) => {
//       switch (loggedInUserType) {
//         case 'anyuser':
//           return res.data.roles.filter((x: { role: string; }) => x.role.toLowerCase() !== 'anyuser');
//         break;
//         case 'admin':
//         return res.data.roles.filter((x: { role: string; }) => x.role.toLowerCase() !== 'adim');
//         break;
//         default:
//           res.data.roles;
//       }
//     }));
//   }
// }
