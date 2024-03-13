import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GundamFormComponent } from './gundam-form/gundam-form.component';
import { SharedModule } from '../shared/shared.module';
import { GundamDetailComponent } from './gundam-detail/gundam-detail.component';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';



@NgModule({
  declarations: [
    GundamFormComponent,
    GundamDetailComponent,
    PilotDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    GundamFormComponent,
    GundamDetailComponent,
    PilotDetailComponent
  ]
})
export class FeaturesModule { }
