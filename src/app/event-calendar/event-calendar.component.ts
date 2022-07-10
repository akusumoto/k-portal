import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../event-moc'; 
import { Event } from '../event';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  events: Event[] = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
