import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { players } from '../player-data';
import { Player } from '../interface/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(players);
  players$ = this.players.asObservable();

  player: BehaviorSubject<Player | null> = new BehaviorSubject<Player | null>(null);
  player$ = this.player.asObservable();

  constructor() { }

  addPlayer(newPlayer: Player): void {
    const currentPlayers = [...this.players.value];
    currentPlayers.unshift(newPlayer);
    this.players.next(currentPlayers);
  }

  updatePlayer(updatedPlayer: Player): void {
    const currentPlayersData = [...this.players.value];
    const index = currentPlayersData.findIndex(player => player.id === updatedPlayer.id);
    if (index !== -1) {
      currentPlayersData[index] = updatedPlayer;
      this.players.next(currentPlayersData);
      console.log(this.players.value)
    }
  }

  getPlayerById(id: number): void {

    const player = this.players.value.find(player => player.id === id);
    console.log(this.players.value)
    if (player) {
      this.player.next(player);
    } else {
      this.player.next(null);
    }
  }

  removePlayer(playerId: number): void {
    const currentArticles = [...this.players.value];
    const index = currentArticles.findIndex(player => player.id === playerId);
    if (index !== -1) {
      currentArticles.splice(index, 1);
      this.players.next(currentArticles);
    }
  }
}
