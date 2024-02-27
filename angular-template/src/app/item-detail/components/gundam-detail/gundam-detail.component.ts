import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gundam } from '../../../shared/interfaces/gundam-data';
import { GundamService } from '../../../shared/services/shopping-service.service';

@Component({
  selector: 'app-gundam-detail',
  templateUrl: './gundam-detail.component.html',
  styleUrls: ['./gundam-detail.component.css']
})
export class GundamDetailComponent implements OnInit, OnDestroy {
  selectedGundam: Gundam | null = null;
  selectedGundamSubscription: Subscription | undefined;

  constructor(private gundamService: GundamService) { }

  ngOnInit() {
    this.selectedGundamSubscription = this.gundamService.selectedGundam.subscribe(selectedGundam => {
      this.selectedGundam = selectedGundam;
    });
  }

  ngOnDestroy() {
    if (this.selectedGundamSubscription) {
      this.selectedGundamSubscription.unsubscribe();
    }
  }

  closeDetail() {
    this.gundamService.selectedGundam.next(null);
  }

  addToCart() {
    if (this.selectedGundam) {
      this.gundamService.addToCart(this.selectedGundam);
    }
  }
}
