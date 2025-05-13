import { Component, OnInit } from '@angular/core';
import {ServiceHomeService  } from '../services/service-home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
nonAssocieesClasses: any[] = [];
   classes: any[] = [];
    enseignants: any[] = [];
  etudiantId: number = 1; 

  constructor(private etudiantService: ServiceHomeService) {}

  ngOnInit(): void {
    this.etudiantService.getClassesInscrit(this.etudiantId).subscribe({
      next: (data: any[]) => {
        this.classes = data;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des classes', err);
      }
    });

    this.etudiantService.getClassesNonInscrit(this.etudiantId).subscribe({
      next: (data) => {
        this.nonAssocieesClasses = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des classes :', err);
      }
    });
     this.etudiantService.getEnseignantsInscrits(this.etudiantId).subscribe({
      next: (data) => {
        this.enseignants = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des enseignants :', err);
      }
    });
  }


}
