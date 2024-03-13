import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GundamPilot } from '../../shared/interfaces/gundam-interface';
import { GundamService } from '../../shared/services/gundam.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrl: './pilot-detail.component.css'
})
export class PilotDetailComponent implements OnInit {
  pilotId: number = 0;
  pilotData: GundamPilot = {
    id: 0,
    name: '',
    nationality: '',
    gundamName: '',
    imageUrl: '',
    affiliations: {
      affiliation: []
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gundamService: GundamService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pilotId = +params['id']
    })
    if (this.pilotId !== 0) {
      this.gundamService.getPilotById(this.pilotId)
      this.gundamService.gundamPilot$.subscribe((data: GundamPilot) => {
        if (data) {
          this.pilotData = data
        }
      })
    }
  }
}