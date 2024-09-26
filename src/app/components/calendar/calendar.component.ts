import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core'; 
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [FullCalendarModule],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [], 
  };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    const eventsFromService = this.eventService.getEvents().map((event) => ({
      title: event.title,
      date: event.date,
    }));

    this.calendarOptions.events = eventsFromService;
  }
}