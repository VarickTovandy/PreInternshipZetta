import { Component, ViewEncapsulation } from '@angular/core';
import { Task } from '../task-interface';

@Component({
  selector: 'app-task-components',
  templateUrl: './task-components.component.html',
  styleUrl: './task-components.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})

export class TaskComponentsComponent {
  newlyAddedTask: Task[] = [];
  newlyAddedOngoingTask: Task[] = [];

  onTaskAdded(task: Task): void {
    this.newlyAddedTask.unshift(task);
  }
  onOngoingTaskAdded(ongoingTask: Task): void {
    this.newlyAddedOngoingTask.unshift(ongoingTask);
  }
}
