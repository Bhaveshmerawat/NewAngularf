import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/User.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  user: any;
  chatRef: any = firebase.firestore().collection('chatrooms');
  constructor(private firebaseService: AuthServiceService) { }
  setChatRoom(chatRoomData: any) {
    this.setRoomData(chatRoomData);
  }
  setRoomData(chat: any) {
    debugger
    this.chatRef.add({
      roomName: chat.name,
      member: [this.getUserEmail()],
      requestedBy: []
    });
  }

  getUserEmail() {
    this.user = this.firebaseService.getUserFromLocal()
    return this.user.email
  }
}
