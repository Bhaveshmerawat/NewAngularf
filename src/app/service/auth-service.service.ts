import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, switchMap } from "rxjs/operators";
import { User } from '../models/User.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false
  user$: Observable<any>;
  // userData: any;
  user: any

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    // Get Auth data then get firestore user document || null
    this.user$ = this.afAuth.authState
    switchMap((user: any) => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  }

  // for signin user
  async signin(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // for register user
  async signup(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }


  // for logout
  async logout() {
    await this.afAuth.signOut()
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  // getUser() {
  //   return this.user$.pipe(first()).toPromise();
  //  // return this.http.get(this.user$)
  // }

  // updateUserData(user: { uid: any; email: any; }) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     roles: {
  //       subscriber: true
  //     },
  //   }
  //   return userRef.set(data, {
  //     merge: true
  //   })
  // }

  // checkAuthorization(user: User, allowedRoles: []): boolean {
  //   if (!user) return false
  //   for (const role of allowedRoles) {
  //     if (user.roles[role]) {
  //       return true
  //     }
  //   }
  //   return false
  // }

  // canRead(user: User) :boolean {
  //   const allowed =['admin','editor','subscriber']
  //   return this.checkAuthorization(user, allowed)
  // }
  // canEdit(user:User) : boolean {
  //   const allowed =['admin']
  //     return this.checkAuthorization(user, allowed)
  // }


  getUserProfile() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    }
  }

  updateUserProfile() {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Update successful
      // ...
      alert("name has been changes")
    }).catch((error) => {
      console.log("proffile not updated")
    });
  }
}
