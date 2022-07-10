import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../event-moc';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = EVENTS;
  selectedEvent?: Event;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}
