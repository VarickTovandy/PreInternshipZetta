import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { GundampageComponent } from './gundampage/gundampage.component';
import { PilotpageComponent } from './pilotpage/pilotpage.component';



@NgModule({
  declarations: [
    HomepageComponent,
    GundampageComponent,
    PilotpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomepageComponent,
    GundampageComponent,
    PilotpageComponent
  ]
})
export class MainModule { }
