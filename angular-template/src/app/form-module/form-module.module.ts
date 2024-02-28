import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AddProductComponentComponent,
    EditProductComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    AddProductComponentComponent,
    EditProductComponentComponent
  ]
})
export class FormModuleModule { }
