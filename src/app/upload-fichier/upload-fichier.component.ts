import { Component } from '@angular/core';
import { FichierService } from '../services/fichier.service';

@Component({
  selector: 'app-upload-fichier',
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.css']
})
export class UploadFichierComponent {

  selectedFile: File | null = null;
  classeId: number = 1; // Remplacer si l’utilisateur peut choisir une classe
  // classes: any[] = []; // Si tu veux charger dynamiquement les classes

  constructor(private fichierService: FichierService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      this.selectedFile = null;
      alert('Veuillez sélectionner un fichier PDF valide.');
    }
  }

  upload(): void {
    if (this.selectedFile) {
      this.fichierService.uploadFichier(this.selectedFile, this.classeId).subscribe({
        next: (response) => {
          alert('Fichier uploadé avec succès !');
          console.log(response); // Tu peux afficher l’URL du fichier ici
        },
        error: (err) => {
          console.error(err);
          alert('Erreur lors de l\'upload.');
        }
      });
    } else {
      alert('Aucun fichier sélectionné.');
    }
  }
}
