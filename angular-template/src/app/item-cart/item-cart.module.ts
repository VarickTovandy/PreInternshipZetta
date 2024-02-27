import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCartComponent } from './item-cart/item-cart.component';



@NgModule({
  declarations: [
    ItemCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemCartComponent
  ]
})
export class ItemCartModule { }
