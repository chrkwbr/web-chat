import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ChannelsComponent} from './channels/channels.component';
import {ChatsComponent} from './chats/chats.component';
import {ChannelService} from './channel.service';
import {ChatService} from './chat.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ChannelService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
