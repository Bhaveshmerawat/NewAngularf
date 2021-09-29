import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any
  chatRef: any = firebase.firestore().collection('chatrooms').doc("key");

  constructor(private firebaseService: AuthServiceService) { }

  setChatRoom(chatRoomData: any) {
    this.setRoomData(chatRoomData);
  }

  setRoomData(chat: any) {
    debugger
    this.chatRef.add({
      roomName: chat.name,
      member: [
        this.getUserData()
      ],
      requestedBy: []
    });
  }

  getUserData() {
    this.user = this.firebaseService.getUserFromLocal()
    return this.user.email
  }
}
