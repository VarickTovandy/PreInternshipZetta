import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task-interface';

@Component({
  selector: 'app-task-pending',
  templateUrl: './task-pending.component.html',
  styleUrls: ['./task-pending.component.css'],
})
export class TaskPendingComponent {
  @Input() pendingTasks: Task[] = [];
  @Output() taskOngoing = new EventEmitter<Task>();

  onNext(task: Task): void {
    this.taskOngoing.emit(task);
    this.pendingTasks = this.pendingTasks.filter(t => t.id !== task.id);
  }
}
