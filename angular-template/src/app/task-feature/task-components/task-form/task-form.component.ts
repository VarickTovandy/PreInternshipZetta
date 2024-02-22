import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Task } from '../../task-interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  taskTitle: string = '';
  taskDueDate: string = '';


  onSubmit(): void {
    const newTask: Task = {
      id: Math.random(),
      title: this.taskTitle,
      dueDate: this.taskDueDate
    };
    this.taskAdded.emit(newTask);
    this.taskTitle = '';
    this.taskDueDate = '';
  }
}
