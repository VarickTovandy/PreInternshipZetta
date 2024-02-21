import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProfilePicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProfilePicComponent
  ]
})
export class CoreModule { }
