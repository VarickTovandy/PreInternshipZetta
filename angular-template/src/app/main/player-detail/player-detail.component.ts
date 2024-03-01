import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../shared/interface/player-interface';
import { PlayerService } from '../../shared/service/player.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})
export class PlayerDetailComponent {
  faArrow = faArrowLeft;
  playerId: number = 0;
  playerData: Player | null = {
    id: 0,
    name: '',
    age: 0,
    gender: '',
    email: '',
    nationality: '',
    chessTitle: '',
    chessElo: 0,
    playerAddress: {
      address: '',
      zipCode: 0,
      city: '',
      country: ''
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = +params['id'];
    });
    if (this.playerId) {
      this.playerService.getPlayerById(this.playerId);
    }
    this.playerService.player$.subscribe((data: Player | null) => {
      console.log(data)
      if(data) {
        this.playerData = data;
      }
    });
  }

  openEditPlayer() {
    this.router.navigate(['/player-form'], { queryParams: { id: this.playerId } })
  }

  backToHome() {
    this.router.navigate([''])
  }
}
