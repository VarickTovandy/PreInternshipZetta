import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopSpec } from '../../shared/interface/laptop-spec';
import { LaptopDataService } from '../../shared/service/laptop-data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  laptopId: string = '';
  laptopData: LaptopSpec = {
    id: '',
    name: '',
    brand: '',
    processor: '',
    gpu: '',
    storage: '',
    ram: '',
    price: 0,
    laptopImg: '',
    warranty: [
      {
        type: '',
        duration: ''
      }
    ]
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private laptopService: LaptopDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.laptopId = params['id']
    })
    if (this.laptopId !== '') {
      this.laptopService.getLaptopById(this.laptopId)
      this.laptopService.laptop$.subscribe((data: LaptopSpec) => {
        if (data) {
          this.laptopData = data
        }
      })
    }
  }

  backToHome() {
    this.router.navigate([''])
  }

  openEditLaptop() {
    this.router.navigate(['/laptop-form'], { queryParams: { id: this.laptopId } })
  }
}
