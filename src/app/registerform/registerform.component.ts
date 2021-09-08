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
  alert: boolean = false;
  test: any = {};


  constructor(
    private formBuilder: FormBuilder,
    private userdata: UserdataService,
    private router: Router,
    private EncrDecr: EncrDecrService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'username': new FormControl('', [Validators.required]),
      'phone': new FormControl(""),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'website': new FormControl('', [Validators.required])
    })
  }

  //get the value of register form by this meyhod
  get valueOfuser() {
    return this.registerForm.controls;
  }

  // naviagte to loginform
  gotoList() {
    this.router.navigate(['/login']);
  }

  //get user value and update on service post api
  updateUser() {
    this.user = Object.assign(this.user, this.registerForm.value); // get the value of user
    // this.userdata.addUser(this.user)  // post the user data to service
    this.userdata.saveUser(this.user).subscribe((result: any) => {
      console.log("result", result)
    })
  }

  // hide Alert message
  closeAlert() {
    this.alert = false;
  }

  onSubmit() {
    if (this.registerForm.valid) { // check the form is validete or not ..?
      // console.log(this.registerForm.value); // print the value of user in console
      //  this.user = Object.assign(this.user, this.registerForm.value); // get the value of user
      //  this.userdata.addUser(this.user)  // post the user data to service
      // debugger
      // const decrypted = this.EncrDecr.get('user', encrypted); // decrypt the encrypted value
      // console.log(JSON.parse(decrypted)); // print on console the value
      this.updateUser(); // function call on submit of user
      this.alert = true; // show alert modal for success message
      this.registerForm.reset(); // reset the form
      const encrypted = this.EncrDecr.set('user', JSON.stringify(this.registerForm.value));  //encryp the form value
      //  console.log(encrypted);   print the value
      //  this.gotoList(); // navigate to link
    } else {
      // validate all form fields
      alert("Please fill validate all form fields")
    }
    // console.log(this.registerForm.value);
  }

}
