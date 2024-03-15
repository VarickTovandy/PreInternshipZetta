import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/shared/interfaces/player';
import { MatDialog } from '@angular/material/dialog';
import { PlayerService } from 'src/app/shared/services/player.service';
import { PlayerFormComponent } from 'src/app/features/player-form/player-form.component';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  playerId: string = '';
  selectedPlayer: Player = {
    _id: '',
    firstName: '',
    lastName: '',
    civility: '',
    birthDate: new Date(),
    gender: '',
    position: '',
    team: '',
    playerImg: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['id']
    })
    if (this.playerId) {
      const mentor = this.playerService.getPlayerById(this.playerId);
      this.selectedPlayer = mentor;
    }
  }

  openEditPlayer() {
    const dialogRef = this.dialog.open(PlayerFormComponent, {
      data: { player: this.selectedPlayer }
    })
  }
}
