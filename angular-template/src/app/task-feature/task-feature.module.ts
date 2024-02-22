import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentsComponent } from './task-components/task-components.component';
import { TaskFormComponent } from './task-components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskPendingComponent } from './task-components/task-pending/task-pending.component';
import { TaskOngoingComponent } from './task-components/task-ongoing/task-ongoing.component';
import { TaskDoneComponent } from './task-components/task-done/task-done.component';



@NgModule({
  declarations: [
    TaskComponentsComponent,
    TaskFormComponent,
    TaskPendingComponent,
    TaskOngoingComponent,
    TaskDoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskComponentsComponent,
    TaskFormComponent,
    TaskPendingComponent,
    TaskOngoingComponent,
    TaskDoneComponent
  ]
})
export class TaskFeatureModule { }
