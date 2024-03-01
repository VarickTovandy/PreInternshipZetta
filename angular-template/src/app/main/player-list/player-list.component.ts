import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../shared/interface/player-interface';
import { PlayerService } from '../../shared/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent implements OnInit {
  playersData: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerService.players$.subscribe((playersData: Player[]) => {
      this.playersData = playersData;
    });
  }

  openAddPlayer(): void {
    this.router.navigate(['/player-form'])
  }
}
