import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css'],
})
export class DayPlanComponent implements OnInit {
  date: string;

  constructor() {}

  ngOnInit(): void {
    this.date = formatDate(new Date(), 'MM/dd/yyyy', 'en');
  }
}
