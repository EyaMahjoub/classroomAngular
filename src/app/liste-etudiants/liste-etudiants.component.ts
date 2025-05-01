import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {
  Etiduants: any[] = [];
  constructor(private etudiantService: EnseignantService) { }

  ngOnInit(): void {
    this.etudiantService.getlistetudiant().subscribe(
      data => {
        console.log('Données reçues :', data); // Log des données
        this.Etiduants= data; // Assurez-vous que `data` est un tableau
      },
      error => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

}
