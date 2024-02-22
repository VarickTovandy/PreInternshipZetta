import { Component } from '@angular/core';
import { Tweet } from '../tweet';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tweet-display',
  templateUrl: './tweet-display.component.html',
  styleUrls: ['./tweet-display.component.css']
})
export class TweetDisplayComponent {
  faRegularHeart = faRegularHeart
  faSolidHeart = faSolidHeart
  faMessage = faMessage
  faRetweet = faRetweet
  faTrashCan = faTrashCan

  name: string = 'Varick';
  username: string= 'youkai';

  tweets: Tweet[] = [];

  onTweetAdded(tweet: Tweet): void {
    this.tweets.unshift(tweet);
    console.log(this.tweets)
  }

  incrementRetweetCount(tweet: Tweet): void {
    tweet.retweet++;
  }

  manageLikeCount(tweet: Tweet): void {
    tweet.like === 0? tweet.like++ : tweet.like--;
  }

  getLikeIcon(tweet: Tweet): any {
    return tweet.like >= 1 ? this.faSolidHeart : this.faRegularHeart;
  }

  getLikeColor(tweet: Tweet): string {
    return tweet.like >= 1 ? '#ff5311' : '';
  }

  deleteTweet(tweet: Tweet): void {
    this.tweets = this.tweets.filter(t => t.id !== tweet.id);
  }
  
  // formatTweetDate(tweet: Tweet): string {
  //   if (tweet.createdAt) {
  //     return this.datePipe.transform(tweet.createdAt, 'h:mm a') || '';
  //   } else {
  //     return '';
  //   }
  // } 
}
