import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  name: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe) {
    this.name = localStorage.getItem('name');
    console.log(firebase.firestore().collection('users'))
    // firebase.database().ref('rooms/').on('value', resp => {
    //   this.rooms = [];
    //   // this.rooms = snapshotToArray(resp);
    //   // this.isLoadingResults = false;
    // });
  }

  ngOnInit(): void {
  }

}
