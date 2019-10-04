import { MessagesService } from './messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  messages: string[];
  constructor() {
    const ms = new MessagesService();
    ms.createMessages();
    this.messages = ms.getMessages();
  }
}
