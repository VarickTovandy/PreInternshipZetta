import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component/list-component.component';
import { FormModuleModule } from '../form-module/form-module.module';
import { ProductComponentComponent } from './product-component/product-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ListComponentComponent,
    ProductComponentComponent
  ],
  imports: [
    CommonModule,
    FormModuleModule,
    FontAwesomeModule
  ],
  exports: [
    ListComponentComponent,
    ProductComponentComponent
  ]
})
export class MainModuleModule { }
