import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartGundam, Gundam } from '../interfaces/gundam-data';
import { gundamData } from '../gundam-data';

@Injectable({
  providedIn: 'root'
})
export class GundamService {
  gundam: BehaviorSubject<Gundam[]> = new BehaviorSubject<Gundam[]>(gundamData);
  gundam$ = this.gundam.asObservable();

  selectedGundam: BehaviorSubject<Gundam | null> = new BehaviorSubject<Gundam | null>(null);
  savedGundam: Gundam[] = [];

  cartItemsSubject: BehaviorSubject<CartGundam[]> = new BehaviorSubject<CartGundam[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  saveGundam(gundam: Gundam) {
    this.selectedGundam.next(gundam);
  }

  addToCart(gundam: Gundam) {
    const cartItems = this.cartItemsSubject.value.slice();
    const existingItem = cartItems.find(item => item.id === gundam.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ id: gundam.id, name: gundam.name, price: gundam.price, quantity: 1 });
    }
    this.cartItemsSubject.next(cartItems);
  }
}
