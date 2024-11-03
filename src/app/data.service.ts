// src/app/data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Fournit le service à l'échelle de l'application
})
export class DataService {
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  messages$: Observable<string[]> = this.messagesSubject.asObservable();

  constructor() { }

  // Ajoute un message
  addMessage(message: string) {
    const currentMessages = this.messagesSubject.getValue();
    this.messagesSubject.next([...currentMessages, message]);
  }

  // Supprime le dernier message
  removeLastMessage() {
    const currentMessages = this.messagesSubject.getValue();
    currentMessages.pop(); // Supprime le dernier élément du tableau
    this.messagesSubject.next([...currentMessages]);
  }

  // Renvoie les messages actuels
  getMessages(): Observable<string[]> {
    return this.messages$;
  }
}
