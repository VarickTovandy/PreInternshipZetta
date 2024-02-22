import { Component, Input } from '@angular/core';
import { Task } from '../../task-interface';

@Component({
  selector: 'app-task-ongoing',
  templateUrl: './task-ongoing.component.html',
  styleUrl: './task-ongoing.component.css'
})
export class TaskOngoingComponent {
  @Input() ongoingTasks: Task[] = [];
}
