import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-ajouter-classe',
  templateUrl: './ajouter-classe.component.html',
  styleUrls: ['./ajouter-classe.component.css']
})
export class AjouterClasseComponent implements OnInit {

  classe: any = {
    nom: '',
    code: '',
    description: '',
    image: '',
    enseignant_id: 0
  };

  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.enseignantService.addClasse(this.classe).subscribe({
      next: (response) => {
        alert('Classe ajoutée avec succès !');
        // Réinitialiser le formulaire
        this.classe = {
          nom: '',
          code: '',
          description: '',
          image: '',
          enseignant_id: 1
        };
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la classe :', error);
        alert('Erreur lors de l\'ajout de la classe.');
      }
    });
  }
}
