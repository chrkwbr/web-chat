import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Channel} from "./channel";
import {of} from "rxjs/observable/of";
import {CHANNELS} from "./mock-channels";

@Injectable()
export class ChannelService {

  constructor() {
  }

  findChannels(): Observable<Channel[]> {
    return of(CHANNELS);
  }
}
