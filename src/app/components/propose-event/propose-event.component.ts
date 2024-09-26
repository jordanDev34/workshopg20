import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propose-event',
  standalone: true,
  imports: [CalendarComponent, CommonModule, FormsModule],
  templateUrl: './propose-event.component.html',
  styleUrls: ['./propose-event.component.css'],
})
export class ProposeEventComponent {
  showForm: boolean = false; // Affichage du formulaire
  isSubmitted: boolean = false; // Confirmation de la soumission

  eventData = {
    name: '',
    surname: '',
    dob: '',
    phone: '',
    email: '',
    proposal: '',
  };

  constructor(private router: Router) {}

  // Permet d'afficher/masquer le formulaire
  toggleForm() {
    this.showForm = !this.showForm;
    this.isSubmitted = false; // Réinitialise l'état de soumission au moment de rouvrir le formulaire
  }

  // Gestion de la soumission du formulaire
  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted = true; // Affichage du message de confirmation

      // Redirection vers la page d'accueil après 2 secondes
      setTimeout(() => {
        this.resetForm(); // Réinitialise le formulaire après l'envoi
        this.router.navigate(['/']);
      }, 2000);
    }
  }

  // Réinitialise le formulaire et masque le formulaire
  resetForm() {
    this.eventData = {
      name: '',
      surname: '',
      dob: '',
      phone: '',
      email: '',
      proposal: '',
    };
    this.showForm = false; // Masque le formulaire après la soumission
    this.isSubmitted = false; // Réinitialise l'état de soumission
  }
}
