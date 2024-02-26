import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Playlist } from '../../playlist-info';

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrl: './playlist-songs.component.css'
})

export class PlaylistSongsComponent implements OnChanges, OnDestroy {
  @Input() songActive: boolean = true;
  @Input() currentPlaylist: Playlist[] = [];
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log(changes)
      const currentValue = changes['songActive'].currentValue;

      this.isActive = currentValue;
      alert('Ini On Change')
    }
  }

  ngOnDestroy(): void {
    alert('Playlist detail ditutup!');
  }
}
