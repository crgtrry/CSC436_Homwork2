import { UserModule } from './models/user/user.module';
import { MessagesModule } from './models/messages/messages.module';
import { MessageModule } from './models/message/message.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: MessagesModule;
  size: number;
  constructor() {
    this.size = 0;
    this.messages = new MessagesModule();
  }

  createMessages() {
    const texts = ['I have a boat', 'I\'m on a horse', 'There is an elephant in my pants!' ];
    for (const t of texts) {
      this.size = this.size + 1;
      this.messages.addMessage(new MessageModule(t));
    }
  }

  getSize(): number {
    return this.size;
  }

  getMessages(): string[] {
    const mStr: Array<string> = [];
    const mm: Array<MessageModule> = this.messages.getMessages();
    for (const m of mm) {
      mStr.push(m.toString());
    }
    return mStr;
  }
}
