import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../shared/interface/player-interface';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PlayerService } from '../../shared/service/player.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  faArrow = faArrowLeft;
  playerForm: FormGroup;
  playerId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.playerForm = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nationality: new FormControl('', [Validators.required]),
      chessTitle: new FormControl('', [Validators.required]),
      chessElo: new FormControl(0, [Validators.required]),
      playerAddress: new FormGroup({
        address: new FormControl('', [
          Validators.required,
        ]),
        zipCode: new FormControl(0, [
          Validators.required,
        ]),
        city: new FormControl('', [
          Validators.required,
        ]),
        country: new FormControl('', [
          Validators.required,
        ]),
      }),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const playerId = params['id'];
      if (playerId) {
        this.playerId = playerId;
      } else {
        console.log("error");
      }
    });

    if (this.playerId) {
      this.playerService.player$.subscribe((playerData: Player | null) => {
        if (playerData) {
          this.playerForm.setValue({
            id: playerData.id,
            name: playerData.name,
            age: playerData.age,
            gender: playerData.gender,
            email: playerData.email,
            nationality: playerData.nationality,
            chessTitle: playerData.chessTitle,
            chessElo: playerData.chessElo,
            playerAddress: {
              address: playerData.playerAddress.address,
              zipCode: playerData.playerAddress.zipCode,
              city: playerData.playerAddress.city,
              country: playerData.playerAddress.country
            }
          });
        }
        else {
          console.log('Player data not found');
        }
      });
    }
  }

  onSubmit() {
    if (!this.playerId) {
      this.playerForm.patchValue({
        id: Math.floor(Math.random() * 1000)
      });
      this.playerService.addPlayer(this.playerForm.value);
    } else {
      this.playerService.updatePlayer(this.playerForm.value);
    }
    this.router.navigate([''])
  }

  backToHome() {
    this.router.navigate([''])
  }
}
