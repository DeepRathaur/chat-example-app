import { Component, OnInit, Renderer2, ViewChild, ElementRef  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats: any;
  activeUsers:any;
  messages:any;
  message=[];
  currentusers:any;
  users: Subscription;
  @ViewChild("divMessages", {read: ElementRef}) private divMessages: ElementRef;
  constructor(private chatService: ChatService, private renderer:Renderer2) { }

  ngOnInit() {
    this.chatService.activeUsers.subscribe((result) => {
      this.currentusers = result;
    });

    this.chatService.messages.subscribe((result) => {
      this.messages = result;
      this.message.push(result);
    });

    

    }
    addData = {
      message:''
   }
   createMessages(){
      this.chatService.createMessages(this.addData);
    }
  }
