import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-details-classe',
  templateUrl: './details-classe.component.html',
  styleUrls: ['./details-classe.component.css']
})
export class DetailsClasseComponent implements OnInit {

  classe: any = null;
  etudiants: any[] = [];
  cours: any[] = [];
  commentaires: any[] = [];  // ✅ Ajouter cette ligne
  errorMessage: string = '';

  enseignantId: number = 1;
  classeId!: number;

  constructor(
    private enseignantService: EnseignantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.classeId = +params['id'];
      if (isNaN(this.classeId) || this.classeId <= 0) {
        this.errorMessage = 'ID de classe invalide';
        return;
      }
      this.loadClasseAndEtudiants();
      this.loadCours();
      this.loadCommentaires(); // ✅ Charger les commentaires
    });
  }

  loadClasseAndEtudiants(): void {
    this.enseignantService.getEtudiantsAndClasseDetails(this.enseignantId, this.classeId)
      .subscribe({
        next: (data) => {
          this.classe = data.classe;
          this.etudiants = data.etudiants;
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Erreur lors du chargement des données.';
          console.error('Erreur API:', err);
        }
      });
  }

  loadCours(): void {
    this.enseignantService.getCoursParClasse(this.classeId).subscribe({
      next: (data) => {
        this.cours = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cours:', err);
      }
    });
  }

  // ✅ Nouvelle méthode pour charger les commentaires
  loadCommentaires(): void {
    this.enseignantService.getCommentairesParClasse(this.classeId).subscribe({
      next: (data) => {
        this.commentaires = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des commentaires:', err);
      }
    });
  }
}
