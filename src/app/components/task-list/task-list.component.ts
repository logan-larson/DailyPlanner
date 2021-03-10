import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      { id: 1, time: 8, title: 'Breakfast' },
      { id: 2, time: 12, title: 'Lunch' },
    ];
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t.id != task.id);
  }
}
