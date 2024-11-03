// src/app/app.component.ts

import { Component } from '@angular/core';
import { DataService } from './data.service'; // Import du service
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // Déclare le composant comme autonome
  imports: [CommonModule, FormsModule], // Importe les modules nécessaires
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage: string = ''; // Zone de texte pour le nouveau message
  messages: string[] = []; // Tableau pour afficher les messages

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Abonne le composant aux messages du service
    this.dataService.getMessages().subscribe((messages: string[]) => {
      this.messages = messages; // Met à jour le tableau de messages
    });
  }

  // Méthode pour ajouter un message
  addMessage() {
    if (this.newMessage.trim()) {
      this.dataService.addMessage(this.newMessage); // Ajoute le message via le service
      this.newMessage = ''; // Réinitialise la zone de texte
    }
  }

  // Méthode pour supprimer le dernier message
  removeLastMessage() {
    this.dataService.removeLastMessage(); // Supprime le dernier message via le service
  }
}
