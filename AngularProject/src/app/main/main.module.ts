import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesModule } from '../features/features.module';
import { PlayerDetailComponent } from './player-detail/player-detail.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PlayerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule
  ],
  exports: [
    HomePageComponent,
    PlayerDetailComponent
  ]
})
export class MainModule { }
