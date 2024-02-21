import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SectionBorderComponent } from '../core/components/section-border/section-border.component';
import { MyHobbiesComponent } from './my-hobbies/my-hobbies.component';
import { MyInformationComponent } from './my-information/my-information.component';
import { CoreModule } from '../core/core.module';
import { WebsiteContainerComponent } from './website-container/website-container.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutMeComponent,
    SectionBorderComponent,
    MyHobbiesComponent,
    MyInformationComponent,
    WebsiteContainerComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    HeroComponent,
    AboutMeComponent,
    SectionBorderComponent,
    MyHobbiesComponent,
    MyInformationComponent,
    WebsiteContainerComponent
  ]
})
export class FeatureModule { }
