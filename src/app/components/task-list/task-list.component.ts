import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t) => {
      this.tasks = t;
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task): void {
    this.tasks = this.tasks.filter((t) => t.id != task.id);
  }
}
