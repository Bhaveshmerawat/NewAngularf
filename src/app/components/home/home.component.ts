import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.firebaseService.getUserFromLocal()
    console.log(this.user)
  }
  signOut() {
    this.firebaseService.logout()
  }
}
