import { Component, Output, EventEmitter, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Playlist } from '../../playlist-info';

@Component({
  selector: 'app-playlist-maker',
  templateUrl: './playlist-maker.component.html',
  styleUrl: './playlist-maker.component.css'
})

export class PlaylistMakerComponent implements OnInit, AfterViewInit {
  @Output() playlistAdded = new EventEmitter<Playlist>();
  @ViewChild('playlistNameInput') playlistNameInput: any;

  playlistName: string = '';

  ngOnInit(): void {
    this.playlistName = 'New Playlist'; 
    alert('Ini On Init')
  }

  ngAfterViewInit(): void {
    this.playlistNameInput.nativeElement.focus();
    alert('Ini After View Init')
  }

  onSubmit(): void {
    const playlist: Playlist = {
      id: Math.random(),
      name: this.playlistName,
      songCount: 0,
    };
    this.playlistAdded.emit(playlist);
    this.playlistName = '';
  }
}
