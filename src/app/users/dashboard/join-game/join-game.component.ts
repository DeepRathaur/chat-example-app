import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ChatService } from '../../../services/chat.service';
import { CommonService } from '../../../services/common.service';


@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  chats: Observable<string[]>;

  constructor(private CommonService: CommonService,private chatService: ChatService, private Router:Router) { }
 userid:any;

  ngOnInit() {
    this.chats = this.chatService.chats;
    this.userid = this.CommonService.getCurrentUser();
  
    //this._docSub = this.chatService.chats.subscribe(doc => this.currentDoc = doc.id);
  }

  addData = {
    id :'',
    name:'',
    room:''
 }
  add() {
    this.addData.id = this.userid
    this.chatService.joinRoom(this.addData);
    this.Router.navigate(['/dashboard/chat']);     
  }
}
