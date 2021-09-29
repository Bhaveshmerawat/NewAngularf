import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import * as firebase from 'firebase';
import { ListenEvent } from '@angular/fire/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  chatroom: any;
  user: any;
  changetext = true;
  chatRef: any = firebase.firestore().collection('chatrooms');
  selectedButton: any = {};
  constructor(private firebaseService: AuthServiceService) { }

  ngOnInit(): void {
    this.firebaseService.getChatroomData();
    this.firebaseService.chatRoomDetails.subscribe((res: any) => {
      this.chatroom = res
      // debugger
      // console.log(this.chatroom)
    });
  }

  sendRequest(list: any) {

    // if (list.requestedBy == this.getUserData()) {
    //   debugger
    //   console.log(this.getUserData())
    //   return console.log("Document successfully aleady update!")
    // } else {
    //   this.chatRef.doc(list.key).update({
    //     requestedBy: [...list.requestedBy, this.getUserData()],
    //   }).then(() => {
    //     this.btnChangeRule(list.key);
    //     console.log("Document successfully updated!");
    //   });
    // }

    this.chatRef.doc(list.key).update({
      requestedBy: [...list.requestedBy, this.getUserData()],
    }).then(() => {
      this.btnChangeRule(list.key);
      console.log("Document successfully updated!");
    });
  }


  getUserData() {
    this.user = this.firebaseService.getUserFromLocal()
    return this.user.email
  }

  btnChangeRule(key: any) {
    this.selectedButton[key] = !this.selectedButton[key];
    // console.log(this.selectedButton);
  }
}
