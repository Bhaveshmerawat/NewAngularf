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
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.firebaseService.signin(this.loginForm.value.email, this.loginForm.value.password);
    } else {
      alert("Please enter valid email and password")
    }
  }
}
