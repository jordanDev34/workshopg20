import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsEventsComponent } from "./components/cards-events/cards-events.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { LayoutComponent } from './components/layout/layout.component';
import { InfosComponent } from './components/infos/infos.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ProposeEventComponent } from './components/propose-event/propose-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HttpClientModule, LayoutComponent, CardsEventsComponent, CalendarComponent, InfosComponent, CardsEventsComponent, FooterComponent, ProposeEventComponent],
})
export class AppComponent {

}
