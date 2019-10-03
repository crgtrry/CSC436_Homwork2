import { MessageModule } from './../message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessagesModule {
  messages: MessageModule[];
  index: number;

  constructor() {
    this.index = 0;
  }

  addMessage(m: MessageModule) {
    this.messages[this.index] = m;
    this.index = this.index + 1;
  }
}
