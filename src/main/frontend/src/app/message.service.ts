import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from "rxjs/observable/of";
import {MESSAGES} from "./mock-messages";
import {Message} from "./message";

@Injectable()
export class MessageService {

  constructor() {
  }

  findMessages(channelId: number): Observable<Message[]> {
    return of(MESSAGES.filter(c => c.channelId === channelId));
  }

  postMessage(message: Message): Observable<Message> {
    MESSAGES.push(message);
    return of(message);
  }
}
