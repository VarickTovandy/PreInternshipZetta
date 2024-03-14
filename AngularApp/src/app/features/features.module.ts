import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MentorDetailComponent } from './mentor-detail/mentor-detail.component';



@NgModule({
  declarations: [
    MentorFormComponent,
    MentorDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MentorFormComponent,
    MentorDetailComponent
  ]
})
export class FeaturesModule { }
