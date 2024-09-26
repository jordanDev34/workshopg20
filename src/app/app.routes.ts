import { Routes } from '@angular/router';
import { CardsEventsComponent } from './components/cards-events/cards-events.component';
import { CalendarComponent } from './components/calendar/calendar.component';

export const appRoutes: Routes = [
  { path: '', component: CardsEventsComponent }, // Route pour la page d'accueil
  { path: 'events', component: CalendarComponent }, // Route pour les événements
  { path: '**', redirectTo: '' }, // Redirection vers la page d'accueil par défaut
];
