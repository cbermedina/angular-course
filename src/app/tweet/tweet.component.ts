import { Component } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent  {
  tweetModel = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
}
