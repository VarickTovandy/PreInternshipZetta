import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetFormComponent } from './tweet-form/tweet-form.component';
import { TweetDisplayComponent } from './tweet-display/tweet-display.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TweetFormComponent,
    TweetDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    TweetFormComponent,
    TweetDisplayComponent
  ]
})
export class TweetFeaturesModule { }
