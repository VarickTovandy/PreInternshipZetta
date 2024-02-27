import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GundamListComponent } from './components/gundam-list/gundam-list.component';
import { GundamCardComponent } from './components/gundam-list/gundam-card/gundam-card.component';
import { ItemCartModule } from '../item-cart/item-cart.module';
import { ItemDetailModule } from '../item-detail/item-detail.module';



@NgModule({
  declarations: [
    GundamListComponent,
    GundamCardComponent
  ],
  imports: [
    CommonModule,
    ItemCartModule,
    ItemDetailModule
  ],
  exports: [
    GundamListComponent,
    GundamCardComponent
  ]
})
export class ItemListModule { }
