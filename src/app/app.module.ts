import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsEventsComponent } from './components/cards-events/cards-events.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CalendarComponent } from './components/calendar/calendar.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppComponent,
    CardsEventsComponent,
    CalendarComponent,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [],
})
export class AppModule {}
