export interface Song {
    id: number;
    title: string;
    artist: string;
    duration: number; 
  }

export interface Playlist {
    id: number;
    name: string;
    songCount: number;
    songs?: Song[];
}
