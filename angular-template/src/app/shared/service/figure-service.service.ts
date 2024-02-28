import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Figure } from '../interface/figure-interface';
import { figures } from '../figure-data'

@Injectable({
  providedIn: 'root'
})
export class FigureServiceService {
  figure: BehaviorSubject<Figure[]> = new BehaviorSubject<Figure[]>(figures);
  figure$ = this.figure.asObservable()

  selectedFigure: BehaviorSubject<Figure | null> = new BehaviorSubject<Figure | null>(null);
  selectedFigure$ = this.selectedFigure.asObservable();

  constructor() { }

  addFigure(figure: Figure): void {
    const currentFigures = [...this.figure.value];
    currentFigures.push(figure);
    this.figure.next(currentFigures);
  }

  setSelectedFigure(figure: Figure | null): void {
    this.selectedFigure.next(figure);
  }

  editSelectedFigure(updatedFigure: Figure): void {
    this.selectedFigure.next(updatedFigure);
  }

  removeFigure(figure: Figure): void {
    const updatedFigures = this.figure.value.filter(f => f !== figure);
    this.figure.next(updatedFigures);

    if (this.selectedFigure.value === figure) {
      this.setSelectedFigure(null);
    }
  }
}
