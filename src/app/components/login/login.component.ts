import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSignedIn: boolean = false
  role?: any
  // private subscriptions: Subscription[] = [];
  constructor(private formBuilder: FormBuilder,
    private firebaseService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    // this.subscriptions.push(
    //   this.firebaseService.currentUser.subscribe((user: any) => {
    //     if (!!user) {
    //       this.router.navigateByUrl('/chat');
    //     }
    //   })
    // );

  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    // console.log(this.loginForm.value);
  //  this.firebaseService.signin(this.loginForm.value.email, this.loginForm.value.password)
    if (this.loginForm.valid) {
      debugger
      this.firebaseService.signin(this.loginForm.value.email, this.loginForm.value.password)
      this.isSignedIn = true;
      if (this.role == 'admin')
        this.router.navigateByUrl('/admin');
      else
        this.router.navigateByUrl('/home');
      alert("congratulation successfully login");
      console.log("success")
    } else {
      alert("Please enter valid email and password")
    }

    // if (this.loginForm.valid) {
    //   this.firebaseService.isLoggedIn
    //   const { email, password } = this.loginForm.value;

    //   // TODO call the auth service
    //   this.subscriptions.push(
    //     this.firebaseService.signin(email, password).subscribe((success: any) => {
    //       if (success) {
    //         this.router.navigateByUrl('/home');
    //       } else {

    //       }
    //       this.firebaseService.isLoggedIn.next(false);
    //     })
    //   );
    // } else {
    //   this.firebaseService.isLoggedIn.next(false);
    //   this.displayFailedLogin();
    // }
  }
}
