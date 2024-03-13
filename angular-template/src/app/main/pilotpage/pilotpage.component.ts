import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GundamService } from '../../shared/services/gundam.service';
import { GundamPilot } from '../../shared/interfaces/gundam-interface';

@Component({
  selector: 'app-pilotpage',
  templateUrl: './pilotpage.component.html',
  styleUrl: './pilotpage.component.css'
})
export class PilotpageComponent implements OnInit {
  pilotsData: GundamPilot[] = [];

  constructor(private gundamService: GundamService, private router: Router) { }

  ngOnInit(): void {
    this.gundamService.gundamPilots$.subscribe((pilotsData: GundamPilot[]) => {
      this.pilotsData = pilotsData
    })
  }

  goToPilotDetail(pilotId: number) {
    this.router.navigate(['pilot-detail', pilotId])
  }
}
