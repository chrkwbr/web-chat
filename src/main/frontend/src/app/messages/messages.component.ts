import {Component, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageService} from "../message.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  channelId: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(_ => {
      this.channelId = +this.route.snapshot.params.id;
      if (!this.channelId) {
        return;
      }
      this.getMessages();
    });
  }

  getMessages() {
    this.messageService.findMessages(this.channelId)
      .subscribe(messages => {
        this.messages = messages
      });
  }

  add(message: string): void {
    message = message.trim();
    if (!message) {
      return;
    }
    this.messageService.postMessage({
      id: this.messages.length + 1,
      channelId: this.channelId,
      message: message
    } as Message).subscribe(_ => {
      this.messageService.findMessages(this.channelId)
        .subscribe(messages => {
          this.messages = messages
        });
    });
  }
}
