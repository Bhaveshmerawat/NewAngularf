import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm!: FormGroup;
  loading = false;
  submitted = false;
  user: any = {};
  alert: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userdata: UserdataService
  ) { }

  ngOnInit(): void {
    this.createRegForm();
  }
  // convenience getter for easy access to form fields
  get formVal() {
    return this.signUpForm.controls;
  }


  createRegForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // hide Alert message
  closeAlert() {
    this.alert = false;
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      // console.log(this.signUpForm.value);
      this.user = Object.assign(this.user, this.signUpForm.value);
      this.userdata.addUser(this.user);
      // localStorage.setItem('users',  JSON.stringify(this.user))
      this.signUpForm.reset(); // reset the form
      this.alert = true;
    } else {
      // validate all form fields
      alert("Please fill validate all form fields")
    }
  }
}
