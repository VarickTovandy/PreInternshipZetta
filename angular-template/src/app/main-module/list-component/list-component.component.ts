import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ListComponentComponent {
    addProductActive: boolean = false;

    toggleAddProduct() {
      this.addProductActive = true;
    }

    onCloseAddProduct(value: boolean): void {
      this.addProductActive = value;
    }
}
