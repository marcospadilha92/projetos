import { Component, OnInit } from '@angular/core';
import {messageService} from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messagesService: messageService) { }

  ngOnInit() {
  }

}
