import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../channel';
import {Chat} from "../chat";
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats: Chat[];

  constructor(private chatService: ChatService) {
  }

  private _channel: Channel;

  get channel(): Channel {
    return this._channel;
  }

  @Input()
  set channel(channel: Channel) {
    this._channel = channel;
    if (!this._channel) {
      return;
    }
    this.chatService.findChats(this._channel.id)
      .subscribe(chats => this.chats = chats);
  }

  ngOnInit() {
  }

  add(message: string): void {
    message = message.trim();
    if (!message) {
      return;
    }
    this.chatService.postChat({
      id: this.chats.length,
      channelId: this._channel.id,
      message: message
    } as Chat).subscribe(_ => {
      this.chatService.findChats(this._channel.id)
        .subscribe(chats => this.chats = chats);
    });
  }
}
