import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncrDecrService } from '../service/encr-decr-service.service';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  registerForm!: FormGroup;
  user: any = {};



  constructor(
    private formBuilder: FormBuilder,
    private userdata: UserdataService,
    private router: Router,
    private EncrDecr: EncrDecrService
    ) { }

  ngOnInit(): void {
    this.createRegisterForm();
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', 'password@123456');
    var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'mo': new FormControl(""),
      'mail': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.registerForm.controls;
  }
  gotoList() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.user = Object.assign(this.user, this.registerForm.value);
      this.userdata.addUser(this.user)
      this.registerForm.reset();
      this. gotoList();
    } else {
      // validate all form fields
      alert("Please fill validate all form fields")
    }
    // console.log(this.registerForm.value);
  }

}
