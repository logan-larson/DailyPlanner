import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, time: 8, title: 'Breakfast' },
    { id: 2, time: 12, title: 'Lunch' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTask(todo) {
    this.tasks.push(todo);
  }
}
