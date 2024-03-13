import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gundam } from '../../shared/interfaces/gundam-interface';
import { GundamService } from '../../shared/services/gundam.service';

@Component({
  selector: 'app-gundam-detail',
  templateUrl: './gundam-detail.component.html',
  styleUrl: './gundam-detail.component.css'
})
export class GundamDetailComponent implements OnInit {
  gundamId: number = 0;
  gundamData: Gundam = {
    id: 0,
    name: '',
    modelNumber: '',
    series: '',
    description: '',
    imageUrl: '',
    armaments: {
      fixed: [],
      handheld: []
    }
  };
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gundamService: GundamService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gundamId = +params['id']
    })
    if (this.gundamId !== 0) {
      this.gundamService.getGundamById(this.gundamId)
      this.gundamService.gundam$.subscribe((data: Gundam) => {
        if (data) {
          this.gundamData = data
        }
      })
    }
  }

  goToEditGundam() {
    this.router.navigate(['/gundam-form'], { queryParams: { id: this.gundamId } })
  }

  deleteGundam(gundamId: number) {
    this.gundamService.removeGundam(gundamId)
    this.router.navigate(['gundams'])
  }
}
