import { Component, ViewEncapsulation } from '@angular/core';
import { Playlist } from '../playlist-info';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrl: './playlist-display.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})

export class PlaylistDisplayComponent {
  addedPlaylists: Playlist[] = [];
  currentPlaylist: Playlist[] = [];

  faTrash = faTrash;
  faArrow = faArrowRight;
  songActive: boolean = false;

  onPlaylistAdded(playlist: Playlist): void {
    this.addedPlaylists.unshift(playlist);
  }

  toggleSongActive(playlist: Playlist): void {
    this.songActive = !this.songActive;
    this.currentPlaylist[0] = playlist;
  }

  removePlaylist(playlist: Playlist): void {
    this.addedPlaylists = this.addedPlaylists.filter(t => t.id !== playlist.id);
  }
}

