import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from "rxjs/observable/of";
import {CHATS} from "./mock-chats";
import {Chat} from "./chat";

@Injectable()
export class ChatService {

  constructor() {
  }

  findChats(channelId: number): Observable<Chat[]> {
    return of(CHATS.filter(c => c.channelId === channelId));
  }

  postChat(chat: Chat): Observable<Chat> {
    CHATS.push(chat);
    return of(chat);
  }
}
