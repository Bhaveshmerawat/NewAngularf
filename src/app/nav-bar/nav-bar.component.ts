import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  loggedin(){
    return localStorage.getItem('token');
  }

  gotologin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.gotologin();
  }

}
