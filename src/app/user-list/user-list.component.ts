import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserdataService } from "../service/userdata.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from "../model/user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  collection: any;
  userDetail: any;
  userdeta: User;
  @Output() postCreated = new EventEmitter<User>();
  constructor(private userdata: UserdataService, private route: ActivatedRoute) {
    this.userdeta = {} as User;
  }

  ngOnInit(): void {
    this.getUsersData();
  }


  getUsersData(): void {
    this.userdata.getData().subscribe((result) => {
      // console.log(result)
      this.collection = result;
    })

  }

  selectUser(detail: any) {
    console.log(detail);
    this.userDetail = detail;
    this.postCreated.emit(this.userdeta);
  }

}
