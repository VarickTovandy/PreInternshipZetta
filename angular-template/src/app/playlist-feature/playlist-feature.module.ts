import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDisplayComponent } from './playlist-display/playlist-display.component';
import { PlaylistMakerComponent } from './playlist-display/playlist-maker/playlist-maker.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlaylistSongsComponent } from './playlist-display/playlist-songs/playlist-songs.component';




@NgModule({
  declarations: [
    PlaylistDisplayComponent,
    PlaylistMakerComponent,
    PlaylistSongsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    PlaylistDisplayComponent,
    PlaylistMakerComponent,
    PlaylistSongsComponent
  ]
})
export class PlaylistFeatureModule { }
