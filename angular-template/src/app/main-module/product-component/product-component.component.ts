import { Component, OnInit } from '@angular/core';
import { Figure } from '../../shared/interface/figure-interface';
import { FigureServiceService } from '../../shared/service/figure-service.service';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent implements OnInit {
  faTrash = faTrashCan;
  faRight = faAnglesRight;
  figures: Figure[] = [];
  selectedFigure: Figure | null = null;

  constructor(private figureService: FigureServiceService) { }

  ngOnInit(): void {
    this.figureService.figure$.subscribe((data: Figure[]) => {
      this.figures = data;
    });

    this.figureService.selectedFigure$.subscribe((selectedFigure: Figure | null) => {
      this.selectedFigure = selectedFigure;
    });
  }

  selectFigure(figure: Figure): void {
    this.figureService.setSelectedFigure(figure);
  }

  removeFigure(figure: Figure): void {
    if (figure && confirm("Are you sure you want to remove this figure?")) {
      this.figureService.removeFigure(figure);
    }
  }
}
