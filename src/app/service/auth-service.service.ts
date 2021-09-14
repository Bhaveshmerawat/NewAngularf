import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
 import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn = false
  authState: any = null;
  currentUserSubject: any;
  // user$: Observable<User>;

  constructor(public firebaseAuth: AngularFireAuth,
    public firebaseStore: AngularFireDatabase,
    private afs: AngularFirestore,
    private router: Router) {
    this.firebaseAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
    // this.user$ = this.firebaseAuth.authState
    // .switchMap(user => {
    //   if (user) {
    //     return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //   } else {
    //     return Observable.of(null)
    //   }
    // })
  }

  // for signin user
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // for register user
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // async canActivate() {
  //   if (!window.localStorage.getItem("role")) {
  //     this.router.navigate(['/home']);
  //   }
  //   return true;
  // }

  // for logout
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }


  // private updateUserData(user) {
  //   // Sets user data to firestore on login
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     roles: {
  //       subscriber: true
  //     }
  //   }
  //   return userRef.set(data, { merge: true })
  // }

  // public get currentUserValue(): LoggedInUser {
  //   this.configLoggedInUser();
  //   return this.currentUserSubject.value as LoggedInUser;
  // }

  // private configLoggedInUser() {
  //   const currentUser = localStorage.getItem('user');
  //   if (currentUser) {
  //     this.currentUserSubject.next(JSON.parse(currentUser));
  //   }
  // }
}
