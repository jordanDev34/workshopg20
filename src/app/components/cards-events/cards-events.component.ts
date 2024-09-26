import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { EventService } from 'src/app/services/event.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cards-events',
  standalone: true,
  imports: [CalendarComponent, CommonModule],
  templateUrl: './cards-events.component.html',
  styleUrl: './cards-events.component.css',
})
export class CardsEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}