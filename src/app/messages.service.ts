import { UserModule } from './models/user/user.module';
import { MessagesModule } from './models/messages/messages.module';
import { MessageModule } from './models/message/message.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: MessagesModule;
  constructor() {}

  createMessages() {
    const texts = ['I have a boat', 'I\'m on a horse', 'There is an elephant in my pants!' ];
    for (const t of texts) {
      this.messages.addMessage(new MessageModule(t));
    }
  }

  getMessages(): MessagesModule {
    return this.messages;
  }
}
