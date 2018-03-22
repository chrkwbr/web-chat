import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ChannelsComponent} from './channels/channels.component';
import {MessagesComponent} from './messages/messages.component';
import {ChannelService} from './channel.service';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ChannelsComponent,
    MessagesComponent
  ],
  providers: [ChannelService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
