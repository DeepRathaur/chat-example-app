import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  chats = this.socket.fromEvent<any>('chats');
  activeUsers = this.socket.fromEvent<any>('activeUsers');
  messages = this.socket.fromEvent<any>('newMessage');
  

  constructor(private socket: Socket) { }

  getActiveRooms() {
   return  this.socket.emit('activeRooms');
  };

  getActiveUsers() {
    let onlineUsers  = this.socket.emit('activeUsers');
    return  onlineUsers;
   };

  joinRoom(data) {
    this.socket.emit('join',data);
  }

  createMessages(data) {
    this.socket.emit('createMessages',data);
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }
}
