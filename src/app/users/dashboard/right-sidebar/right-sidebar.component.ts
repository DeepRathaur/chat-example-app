import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  // chats: Observable<any>;
  chats: any;
  activeUsers:any;
  currentusers:any;
  users: Subscription;

  constructor(private chatService: ChatService) { }
  

  ngOnInit() {
    //this.chats = this.chatService.chats;
    this.chatService.activeUsers.subscribe((result) => {
      this.currentusers = result;
    });
  }
  
  getActiveRooms(){
    this.chatService.getActiveRooms();
  }
}