import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events = [
    {
      title: 'Événement 1',
      description: "Description de l'événement 1",
      date: '2024-10-12',
    },
    {
      title: 'Événement 2',
      description: "Description de l'événement 2",
      date: '2024-10-15',
    },
    {
      title: 'Événement 3',
      description: "Description de l'événement 3",
      date: '2024-10-20',
    },
  ];

  getEvents() {
    return this.events;
  }
}