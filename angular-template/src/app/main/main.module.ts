import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerDetailComponent
  ]
})
export class MainModule { }
