import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopDataService } from '../../shared/service/laptop-data.service';
import { LaptopSpec } from '../../shared/interface/laptop-spec';
import { AccentRemovalPipe } from '../../shared/pipe/accent-removal/accent-removal.pipe';
import { WhitespaceRemovalPipe } from '../../shared/pipe/whitespace-removal/whitespace-removal.pipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  providers: [AccentRemovalPipe, WhitespaceRemovalPipe],
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  laptopsData: LaptopSpec[] = [];
  searchText: string = '';

  constructor(
    private LaptopDataService: LaptopDataService,
    private router: Router,
    private accentRemoval: AccentRemovalPipe,
    private whitespaceRemoval: WhitespaceRemovalPipe,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.LaptopDataService.laptops$.subscribe((laptopsData: LaptopSpec[]) => {
      this.laptopsData = laptopsData;
    })
  }

  openAddLaptop() {
    this.router.navigate(['/laptop-form'])
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const lang = target.value;
      this.translate.use(lang);
    }
  }

  get filteredLaptops(): LaptopSpec[] {
    return this.laptopsData.filter((laptop) =>
      this.whitespaceRemoval
        .transform(this.accentRemoval.transform(laptop.name))
        .includes(
          this.whitespaceRemoval.transform(this.accentRemoval.transform(this.searchText))
        )
    );
  }
}
