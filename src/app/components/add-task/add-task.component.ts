import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  time: number;
  title: string;
  @Output() addTask: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    const task: Task = {
      id: Math.floor(Math.random() * 10000),
      time: this.time,
      title: this.title,
    };
    this.addTask.emit(task);

    this.time = this.time + 100;
    this.title = '';
  }
}
