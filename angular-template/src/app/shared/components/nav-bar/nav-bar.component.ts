import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(
    private translate: TranslateService
  ) { }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const lang = target.value;
      this.translate.use(lang);
    }
  }
}
