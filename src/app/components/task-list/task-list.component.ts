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

  ngOnInit(): void {}

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task): void {
    this.tasks = this.tasks.filter((t) => t.id != task.id);
  }
}
