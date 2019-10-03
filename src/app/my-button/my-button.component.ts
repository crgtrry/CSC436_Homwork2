import { Component, OnInit } from '@angular/core';
import { LikeImageService } from './../like-image.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  liked: boolean;
  constructor( likeImageService: LikeImageService ) {
          this.liked = false;
  }
  handleClick(event: Event) {
    if (this.liked === false) {
      this.liked = true;
    } else {
      this.liked = false;
    }
    console.log('Button clicked', event);
  }
  ngOnInit() {
  }

}
