import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Player } from 'src/app/shared/interfaces/player';
import { MatDialog } from '@angular/material/dialog';
import { PlayerService } from 'src/app/shared/services/player.service';
import { PlayerFormComponent } from 'src/app/features/player-form/player-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  playerList: Player[] = [];
  dataSource = new MatTableDataSource<Player>([]);
  constructor(private playerService: PlayerService, private router: Router, private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'no',
    'name',
    'gender',
    'position',
    'team',
    'action'
  ];

  ngOnInit(): void {
    this.playerService.players$.subscribe((players) => {
      this.playerList = players;
      this.dataSource.data = this.playerList;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  navigateToPlayerDetail(playerId: string) {
    this.router.navigate(['player-detail', playerId]);
  }

  removePlayer(playerId: string) {
    this.playerService.removePlayer(playerId)
  }

  openAddPlayer() {
    const dialogRef = this.dialog.open(PlayerFormComponent, {
    })
  }
}
