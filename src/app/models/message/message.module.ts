import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessageModule {
  timestamp: string;
  text: string;

  constructor(t: string) {
    this.text = t;
    const now = new Date();
    const date = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + now.getDate();
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    this.timestamp = date + 'T' + time;
  }

  toString(): string {
    return this.timestamp + '--' + this.text;
  }
}
