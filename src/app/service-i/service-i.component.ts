// src/app/message-list/message-list.component.ts

import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  newMessage: string = ''; // Zone de texte pour le nouveau message
  messages: string[] = []; // Tableau pour afficher les messages

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // Abonne le composant aux messages du service
    this.messageService.getMessages().subscribe((messages: string[]) => {
      this.messages = messages; // Met à jour le tableau de messages
    });
  }

  // Méthode pour ajouter un message
  addMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage); // Ajoute le message via le service
      this.newMessage = ''; // Réinitialise la zone de texte
    }
  }

  // Méthode pour supprimer le dernier message
  removeLastMessage() {
    this.messageService.removeLastMessage(); // Supprime le dernier message via le service
  }
}
