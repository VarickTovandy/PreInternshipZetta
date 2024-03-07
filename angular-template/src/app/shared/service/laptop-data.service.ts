import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LaptopSpec } from '../interface/laptop-spec';
import { laptops } from '../laptop-data';

@Injectable({
  providedIn: 'root'
})
export class LaptopDataService {
  laptops: BehaviorSubject<LaptopSpec[]> = new BehaviorSubject<LaptopSpec[]>(laptops);
  laptops$ = this.laptops.asObservable();

  laptop: BehaviorSubject<LaptopSpec> = new BehaviorSubject<LaptopSpec>({
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
  });
  laptop$ = this.laptop.asObservable();

  constructor() { }

  addLaptop(newLaptop: LaptopSpec): void {
    const currentLaptops = [...this.laptops.value];
    currentLaptops.unshift(newLaptop);
    this.laptops.next(currentLaptops);
    console.log(this.laptops.value)
  }

  getLaptopById(id: string): void {
    const laptop = this.laptops.value.find(laptop => laptop.id === id);
    if (laptop) {
      this.laptop.next(laptop);
    }
  }

  updateLaptop(updatedLaptop: LaptopSpec): void {
    const currentPlayersData = [...this.laptops.value];
    const index = currentPlayersData.findIndex(laptop => laptop.id === updatedLaptop.id);
    if (index !== -1) {
      currentPlayersData[index] = updatedLaptop;
      this.laptops.next(currentPlayersData);
    }
  }

  removeLaptop(laptopId: string): void {
    const currentLaptops = [...this.laptops.value]
    const index =  currentLaptops.findIndex(laptop => laptop.id === laptopId)
    if(index !== -1) {
      currentLaptops.splice(index, 1);
      this.laptops.next(currentLaptops);
    }
  }
}
