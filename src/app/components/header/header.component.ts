import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
// import { runInThisContext } from 'vm';
// import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean = false;
  constructor(private router: Router, private firebaseService: AuthServiceService) { }

 // userStatus = this.firebaseService.userStatus;

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') ? true : false;

    this.firebaseService.isSignedIn.subscribe((res: any) => {
      this.isSignedIn = res;
    });

    // this.firebaseService.userChanges();

    // this.firebaseService.userStatusChanges.subscribe(x => this.userStatus = x);
    // console.log(this.userStatus)
  }

  logOutSec() {
    this.isSignedIn = false;
    this.firebaseService.logout();
  }

}
