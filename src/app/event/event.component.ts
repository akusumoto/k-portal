import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Event = {
    id: 1,
    name: "テストイベント",
    date: new Date(),
    detail: "詳細ですこれが",
    answers: [],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
