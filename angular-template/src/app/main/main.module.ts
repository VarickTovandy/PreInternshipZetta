import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardInfoComponent } from './card-info/card-info.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardListComponent,
    CardInfoComponent
  ]
})
export class MainModule { }
