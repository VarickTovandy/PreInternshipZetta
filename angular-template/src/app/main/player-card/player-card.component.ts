import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../shared/service/player.service';
import { Player } from '../../shared/interface/player-interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  faTrash = faTrash;
  @Input() playerData: Player = {
    id: 0,
    name: '',
    age: 0,
    gender: '',
    email: '',
    nationality: '',
    chessTitle: '',
    chessElo: 0,
    playerAddresses: [{
      address: '',
      zipCode: 0,
      city: '',
      country: ''
    }],
    contactPerson: [{
      name: '',
      phoneNumber: ''
    }]
  };

  constructor(private router: Router, private playerService: PlayerService) { }

  navigateToDetail(playerId: number) {
    this.router.navigate(['/player-detail', playerId]);
  }

  removePlayer(playerId: number) {
    this.playerService.removePlayer(playerId);
  }
}
