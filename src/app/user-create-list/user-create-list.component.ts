import { Component, Input, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';


@Component({
  selector: 'app-user-create-list',
  templateUrl: './user-create-list.component.html',
  styleUrls: ['./user-create-list.component.scss']
})
export class UserCreateListComponent implements OnInit {
  message: string | undefined;
  constructor(private userdata: UserdataService) { }

  ngOnInit(): void {
    this.message = this.userdata.getMessage()
  }

}
