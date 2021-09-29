import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,Form } from '@angular/forms';
//import { AuthServiceService } from 'src/app/service/auth-service.service';
import {Router} from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  alert: boolean = false;
  user: any;
  isSignedIn = false
  // email!: string;
  // password!: string;

  constructor(private formBuilder: FormBuilder, public firebaseService: AuthServiceService,private router: Router) { }

  ngOnInit(): void {
    this.createRegForm();
  }

  createRegForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  get inputValue() {
    return this.registerForm.controls;
  }

  alertClose() {
    this.alert = false;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.alert = true;
      this.firebaseService.signup(this.registerForm.value);
    } else {
      alert("Please fill all fields")
    }
  }
}
