import { Component, ViewEncapsulation } from '@angular/core';
import { Gundam } from '../../../shared/interfaces/gundam-data';
import { gundamData } from '../../../shared/gundam-data';

@Component({
  selector: 'app-gundam-list',
  templateUrl: './gundam-list.component.html',
  styleUrl: './gundam-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GundamListComponent {
  gundamData: Gundam[] = gundamData;
}
