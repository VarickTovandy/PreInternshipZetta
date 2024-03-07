import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ItemFormComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ItemFormComponent}
    ])
  ],
  exports: [
    ItemFormComponent,
    ItemDetailComponent
  ]
})
export class ItemsModule { }
