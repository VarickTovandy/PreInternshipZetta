import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { PlayerFormComponent } from './player-form/player-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: '', component: PlayerFormComponent }
    ])
  ],
  exports: [
    PlayerFormComponent
  ]
})
export class FormModule { }
