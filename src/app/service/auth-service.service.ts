import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth,
    public firebaseStore: AngularFireDatabase,
    private router: Router) { }

  // for signin user
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // for register user
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // for logout
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
