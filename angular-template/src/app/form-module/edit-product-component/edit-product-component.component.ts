import { Component, OnInit } from '@angular/core';
import { Figure } from '../../shared/interface/figure-interface';
import { FigureServiceService } from '../../shared/service/figure-service.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {
  faPen = faPenToSquare;
  faXmark = faXmark;

  selectedFigure: Figure | null = null;
  isEditing: boolean = false;
  updatedName: string = '';
  updatedPrice: string = '';
  updatedCharacter: string = '';
  updatedManufacturer: string = '';
  updatedCategory: string = '';

  constructor(private figureService: FigureServiceService) { }

  ngOnInit(): void {
    this.figureService.selectedFigure$.subscribe((selectedFigure: Figure | null) => {
      this.selectedFigure = selectedFigure;

      if (this.selectedFigure) {
        this.updatedName = this.selectedFigure.name;
        this.updatedPrice = this.selectedFigure.price;
        this.updatedCharacter = this.selectedFigure.character;
        this.updatedManufacturer = this.selectedFigure.manufacturer;
        this.updatedCategory = this.selectedFigure.category;
      }
    });
  }

  editFigure(): void {
    if (this.selectedFigure) {
      this.selectedFigure.name = this.updatedName;
      this.selectedFigure.price = this.updatedPrice;
      this.selectedFigure.character = this.updatedCharacter;
      this.selectedFigure.manufacturer = this.updatedManufacturer;
      this.selectedFigure.category = this.updatedCategory;
      console.log(this.selectedFigure)
    }
  }

  closeEdit():void {
    this.selectedFigure = null
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
