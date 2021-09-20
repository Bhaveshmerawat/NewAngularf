import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collection: any;
  userDetail: any;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
   // this.getUsersData();
  }

  // getUsersData(): void {
  //   this.firebaseService.getUser().subscribe((result) => {
  //     // console.log(result)
  //     this.collection = result;
  //   })

  // }
}
