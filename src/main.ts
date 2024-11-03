// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DataService } from './app/data.service'; // Import du service

bootstrapApplication(AppComponent, {
  providers: [DataService] // Fournit le service directement ici
}).catch(err => console.error(err));
