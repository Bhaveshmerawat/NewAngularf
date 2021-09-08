import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: any;
  data: any;
  singleUser: any;
  @Input() userdeta = [];

  constructor(private userdata: UserdataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    //   this.getSingleUser();
    this.getSingleUser();
  }

  getSingleUser() {
    this.id = this.route.snapshot.params['id'];
    this.userdata.getOne(this.id).subscribe((detail) => {
      this.singleUser = detail;
      //   console.log(data)
    })
    // this.id = this.route.snapshot.params['id'];
  }

  // getSingleUser(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userdata.getData(id)
  //     .subscribe(data => this.singeUser = data);
  // }

  // getSingleUser(): void {
  //   debugger
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userdata.getData()
  //     .subscribe(data => this.singleUser = data);
  // }

  // getUserDetail(): void {
  //   debugger
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userdata.getsignleUser(id)
  //     .subscribe(user => this.data = user);
  // }

}
