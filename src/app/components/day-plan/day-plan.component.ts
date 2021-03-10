import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css'],
})
export class DayPlanComponent implements OnInit {
  tasks: Task[] = [
    { time: 12, title: 'Lunch' },
    { time: 18, title: 'Dinner' },
  ];

  constructor() {}

  ngOnInit(): void {}

  newTask(): void {
    this.tasks.push({ time: 12, title: 'Lunch' });
  }
}
