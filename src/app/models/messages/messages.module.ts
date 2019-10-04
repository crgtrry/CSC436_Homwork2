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
  messages: Array<MessageModule> = [];
  index: number;

  constructor() {
    this.index = 0;
  }

  addMessage(m: MessageModule) {
    this.messages.push(m);
    this.index = this.index + 1;
  }

  size(): number {
    return this.messages.length;
  }

  getMessages(): Array<MessageModule> {
    return this.messages;
  }
}
