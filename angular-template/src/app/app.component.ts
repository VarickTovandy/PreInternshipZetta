import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSidenavOpen: boolean = true;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sidenav.toggle();
  }
}
