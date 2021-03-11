import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  time: number;
  title: string;
  @Output() addTask: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.time.toString() != '' && this.title != '') {
      const task: Task = {
        time: this.time,
        title: this.title,
      };
      this.taskService.addTask(task);
    }

    this.title = '';
    this.time += 100;

    document.getElementById('time').focus();
  }
}
