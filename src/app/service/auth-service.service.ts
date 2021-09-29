import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, map, switchMap } from "rxjs/operators";
import { User } from '../models/User.model';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isSignedIn: any = new EventEmitter<boolean>();
  chatRoomDetails: any = new EventEmitter<any>();
  usersRef: any = firebase.firestore().collection('users');
  chatRef: any = firebase.firestore().collection('chatrooms');

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private http: HttpClient) { }

  // for signin user
  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((response: any) => {
      this.getCurrentUserData(response.user.uid);
      alert("congratulation successfully login");
    }, (error) => { alert(error.message) });
  }

  // for register user
  signup(userData: User) {
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res: any) => {
        this.setUserData(userData, res.user.uid);
      });
  }

  getCurrentUserData(uid: string) {
    this.usersRef.doc(uid).get().then((snapshot: any) => {
      if (snapshot.exists) {
        localStorage.setItem('user', JSON.stringify(snapshot.data()));
        this.isSignedIn.emit(true);
        const path = (snapshot.data().role == 'admin') ? '/admin' : '/user';
        this.router.navigateByUrl(path);
      }
    });
  }

  firestoreSnapshotToArray(snapshot: any) {
    const returnArr: any = [];
    snapshot.forEach((doc: any) => {
      const data: any = doc.data();
      data.key = doc.id;
      returnArr.push(data);
    });
    return returnArr;
  }

  // for logout
  async logout() {
    await firebase.auth().signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    });
  }

  // add user data in firestore after signup
  setUserData(user: any, uid: string) {
    this.usersRef.doc(uid).set({
      uid: uid,
      email: user.email,
      phone: user.phone,
      name: user.name,
      password: user.password,
      role: 'user'
    });
  }

  getUserFromLocal() {
    return (
      localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : ''
    );
  }

  getChatroomData() {
    this.chatRef.get().then((snapshot: any) => {
     this.chatRoomDetails.emit(this.firestoreSnapshotToArray(snapshot));
    });
  }
}
