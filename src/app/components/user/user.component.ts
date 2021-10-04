import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import * as firebase from 'firebase';
import { ListenEvent } from '@angular/fire/database';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  chatroom: any;
  user: any;
  btnType: any;
  chatRef: any = firebase.firestore().collection('chatrooms');
  selectedButton: any = {};
  constructor(private firebaseService: AuthServiceService) { }

  ngOnInit(): void {
    this.firebaseService.getChatroomData();
    this.firebaseService.chatRoomDetails.subscribe((res: any) => {
      this.chatroom = res;
      // debugger
      //  console.log(this.chatroom)
      // const reqdata = this.chatroom.map(( obj : { requestedBy: any; }) => {
      //   if (obj.requestedBy === this.getUserData()) {
      //     // console.log('data already exist')
      //     this.chatroom.requestedBy = this.getUserData()
      //   } else {
      //     obj.requestedBy.key = "newkey";
      //     console.log(obj.requestedBy.key)
      //   }
      //   //  console.log(obj)
      //   //  obj.requestedBy.key = "newkey";
      //   //  console.log(obj)
      // })
      //  return console.log(reqdata)
      //  const editUser =(this.chatroom, requestedBy)
      // var str = this.chatroom.requestedBy;
      // str = this.reverse1(str);
      // console.log(str)
      this.reverse1();
    });
  }

  sendRequest(list: any) {
    // if (list.requestedBy == this.getUserData()) {
    if (list.requestedBy.includes(this.getUserData())) {
      debugger
      //  console.log(this.getUserData())
      return console.log("Document successfully aleady update!");
      // this.btnChangeRule(list.key);
    } else {
      this.chatRef.doc(list.key).update({
        requestedBy: [...list.requestedBy, this.getUserData()],
      }).then(() => {
        this.btnChangeRule(list.key);
        console.log("Document successfully updated!");
      });
    }
  }

  getUserData() {
    this.user = this.firebaseService.getUserFromLocal()
    return this.user.email
  }

  btnChangeRule(key: any) {
    this.selectedButton[key] = !this.selectedButton[key];
    // console.log(this.selectedButton);
  }

  reverse1() {
    let stringDeta = 'dsbvkbsvkjb'
    var len = stringDeta.length, result = "";
    console.log(result)
    for (var i = 0; i <= len - 1; i++) {
      result = result + stringDeta[len - i - 1];
    }
    return console.log(result);
  }
}
