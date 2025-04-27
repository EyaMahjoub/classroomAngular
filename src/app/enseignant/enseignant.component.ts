import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  Enginants: any[] = [];

  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.enseignantService.getlistenseignant().subscribe(
      data => {
        console.log('Données reçues :', data); // Log des données
        this.Enginants = data; // Assurez-vous que `data` est un tableau
      },
      error => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }
}
