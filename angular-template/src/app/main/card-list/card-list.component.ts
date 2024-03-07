import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopDataService } from '../../shared/service/laptop-data.service';
import { LaptopSpec } from '../../shared/interface/laptop-spec';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  laptopsData: LaptopSpec[] = [];

  constructor(private LaptopDataService: LaptopDataService, private router: Router) { }

  ngOnInit(): void {
    this.LaptopDataService.laptops$.subscribe((laptopsData: LaptopSpec[]) => {
      this.laptopsData = laptopsData;
    })
  }

  openAddLaptop() {
    this.router.navigate(['/laptop-form'])
  }
}
