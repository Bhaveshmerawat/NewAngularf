import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private authservice: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'mail': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const token = this.authservice.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.mail)
      this.gotoHome();
      alert('login success');
    } else {
      alert('login not success');
    }
  }

}
