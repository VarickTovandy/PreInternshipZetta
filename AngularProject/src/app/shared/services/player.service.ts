import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  public players$: Observable<Player[]> = this.players.asObservable();

  constructor(private http: HttpClient) { this.loadPlayers() }

  loadPlayers(): void {
    this.http.get<Player[]>('../../../assets/player.json').subscribe({
      next: (players: Player[]) => {
        this.players.next(players);
        console.log(this.players.value)
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    })
  }

  getPlayerById(playerId: string) {
    return this.players.getValue().find((mentor) => mentor._id === playerId);
  }

  addNewPlayer(newPlayer: Player) {
    const currentPlayers = [...this.players.value];
    currentPlayers.unshift(newPlayer);
    this.players.next(currentPlayers)
  }

  updatePlayer(updatedPlayer: Player) {
    const currentPlayers = [...this.players.value];
    const index = currentPlayers.findIndex(player => player._id === updatedPlayer._id);
    if (index !== -1) {
      currentPlayers[index] = updatedPlayer;
      this.players.next(currentPlayers)
    }
  }

  removePlayer(idPlayer: string) {
    
  }
}
