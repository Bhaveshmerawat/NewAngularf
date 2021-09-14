import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn = true
  constructor(private firebaseService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logOutSec() {
    this.isSignedIn = false;
    this.firebaseService.logout()
  //  this.router.navigateByUrl('/login');
  }

}
