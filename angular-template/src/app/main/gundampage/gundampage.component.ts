import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GundamService } from '../../shared/services/gundam.service';
import { Gundam } from '../../shared/interfaces/gundam-interface';

@Component({
  selector: 'app-gundampage',
  templateUrl: './gundampage.component.html',
  styleUrl: './gundampage.component.css'
})
export class GundampageComponent implements OnInit {
  gundamsData: Gundam[] = [];

  constructor(private gundamService: GundamService, private router: Router) { }

  ngOnInit(): void {
    this.gundamService.gundams$.subscribe((gundamsData: Gundam[]) => {
      this.gundamsData = gundamsData
    })
  }

  navigateToAddGundam() {
    this.router.navigate(['gundam-form'])
  }

  goToGundamDetail(gundamId: number) {
    this.router.navigate(['gundam-detail', gundamId])
  }
}
