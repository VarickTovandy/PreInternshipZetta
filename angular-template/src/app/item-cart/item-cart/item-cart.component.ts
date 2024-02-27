import { Component, OnInit } from '@angular/core';
import { GundamService } from '../../shared/services/shopping-service.service';
import { CartGundam } from '../../shared/interfaces/gundam-data';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  cartItems: CartGundam[] = [];
  totalPrice: number = 0;

  constructor(private gundamService: GundamService) { }

  ngOnInit() {
    this.gundamService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
}
