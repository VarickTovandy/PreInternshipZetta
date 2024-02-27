import { Component } from '@angular/core';
import { Gundam } from '../../../../shared/interfaces/gundam-data';
import { GundamService } from '../../../../shared/services/shopping-service.service';

@Component({
  selector: 'app-gundam-card',
  templateUrl: './gundam-card.component.html',
  styleUrls: ['./gundam-card.component.css']
})
export class GundamCardComponent {
  gundams: Gundam[] = [];

  constructor(private gundamService: GundamService) {
    this.gundamService.gundam$.subscribe(data => {
      this.gundams = data;
    });
  }

  saveGundamData(gundam: Gundam) {
    this.gundamService.saveGundam(gundam);
  }
}
