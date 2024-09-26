import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [CalendarComponent, CommonModule],

  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  infos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadInfos();
  }

  isLoading = true;

  loadInfos() {
    this.http.get<any[]>('assets/infos.json').subscribe(
      (data) => {
        this.infos = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erreur de chargement:', error);
        this.isLoading = false;
      }
    );
  }

  showMoreCards() {
    // Logique pour afficher plus de cartes
    console.log('Afficher plus de cartes');
  }
}
