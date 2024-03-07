import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopSpec } from '../../shared/interface/laptop-spec';
import { LaptopDataService } from '../../shared/service/laptop-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input() laptopData: LaptopSpec = {
    id: '',
    name: '',
    brand: '',
    processor: '',
    gpu: '',
    storage: '',
    ram: '',
    price: 0,
    laptopImg: '',
    warranty: [{
      type: '',
      duration: ''
    }],
  }

  constructor(private router: Router, private laptopService: LaptopDataService) { }

  openLaptopDetail(laptopId: string) {
    this.router.navigate(['/laptop-detail', laptopId])
  }

  removeLaptop(laptopId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this laptop. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.laptopService.removeLaptop(laptopId);
        Swal.fire(
          'Deleted!',
          'The laptop has been deleted.',
          'success'
        );
      }
    });
  }
}
