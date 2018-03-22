import {Component, OnInit} from '@angular/core';
import {Channel} from "../channel";
import {ChannelService} from "../channel.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: Channel[];

  constructor(private channelService: ChannelService) {
  }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.channelService.findChannels()
      .subscribe(channels => this.channels = channels);
  }
}
