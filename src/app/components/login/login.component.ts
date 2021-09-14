import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSignedIn = false
  constructor(private formBuilder: FormBuilder,
    private firebaseService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    this.firebaseService.signin(this.loginForm.value.email, this.loginForm.value.password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
      alert("congratulation successfully login");
      this.router.navigateByUrl('/home');
      console.log("success")
    } else {
      alert ("Please enter valid email and password")
    }

  }

}
