import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Figure } from '../../shared/interface/figure-interface';
import { FigureServiceService } from '../../shared/service/figure-service.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent {
  faXmark = faXmark;
  isSlideOut: boolean = false;

  @Input() addProductActive: boolean = false;
  @Output() addProductActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  newFigure: Figure = {
    id: 0,
    name: '',
    price: '',
    imgUrl: '',
    description: '',
    character: '',
    manufacturer: '',
    category: ''
  };

  constructor(private figureService: FigureServiceService) { }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.newFigure.id = Math.floor(Math.random() * 1000);
      this.figureService.addFigure(this.newFigure);
      this.resetForm();
    } else {
      console.log("error");
    }
  }

  resetForm(): void {
    this.newFigure = {
      id: 0,
      name: '',
      price: '',
      description: '',
      imgUrl: '',
      character: '',
      manufacturer: '',
      category: ''
    };
  }

  isFormValid(): boolean {
    return (
      this.newFigure.name.trim() !== '' &&
      this.newFigure.price.trim() !== '' &&
      this.newFigure.character.trim() !== '' &&
      this.newFigure.manufacturer.trim() !== '' &&
      this.newFigure.category.trim() !== ''
    );
  }

  closeAddProduct() {
    this.addProductActive = !this.addProductActive;
    this.addProductActiveChange.emit(this.addProductActive);
  }
}
