import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  cours: any[] = [];
  constructor(private coursService: EnseignantService) { }

  ngOnInit(): void {
    this.coursService.getlistcours().subscribe(
      data => {
        console.log('Données reçues :', data); // Log des données
        this.cours = data; // Assurez-vous que `data` est un tableau
      },
      error => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

}
