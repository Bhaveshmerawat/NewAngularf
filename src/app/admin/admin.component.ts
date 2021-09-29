import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  createRoom!: FormGroup;
  constructor(public adminService: AdminService) { }
  ngOnInit(): void {
    this.createRoom = new FormGroup({
      'name': new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    debugger
    this.adminService.setChatRoom(this.createRoom.value);
    console.log(this.createRoom.value)
  }

}
