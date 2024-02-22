import { Component, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})

export class TweetFormComponent {
  tweetContent: string = '';

  @Output() tweetAdded = new EventEmitter<Tweet>();

  onSubmit(): void {
    if (this.tweetContent.trim() !== '') {
      const newTweet: Tweet = {
        id: Math.random(),
        content: this.tweetContent,
        createdAt: new Date(),
        reply: 0,
        like: 0,
        retweet: 0
      };
      this.tweetAdded.emit(newTweet);
      this.tweetContent = '';
    }
  }
}
