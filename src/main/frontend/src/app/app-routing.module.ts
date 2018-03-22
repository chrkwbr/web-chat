import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChannelsComponent} from "./channels/channels.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  {path: 'channels', component: ChannelsComponent},
  {path: 'messages/:id', component: MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
