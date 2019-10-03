import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessagesModule {
  messages: string[];
  index: number;

  constructor() {
    this.index = 0;
  }

  addMessage(m: string) {
    this.messages[this.index] = m;
    this.index = this.index + 1;
  }
}
