import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GundamDetailComponent } from './components/gundam-detail/gundam-detail.component';



@NgModule({
  declarations: [
    GundamDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GundamDetailComponent,
  ]
})
export class ItemDetailModule { }
