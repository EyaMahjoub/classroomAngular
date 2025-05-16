import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Classe {
  id: number;
  nom: string;
  code?: string;
  description?: string;
  image?: string;
}

interface Devoir {
  id: number;
  titre: string;
}

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html'
})
export class AddCoursComponent implements OnInit {
  coursForm!: FormGroup;
  classes: Classe[] = [];
  devoirs: Devoir[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initForm();
    this.loadClasses();
    this.loadDevoirs();
  }

  initForm(): void {
    this.coursForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      classe_id: [null, Validators.required],
      devoire_id: [null]
    });
  }

  loadClasses(): void {
    this.http.get<Classe[]>('http://localhost:8000/api/classes').subscribe({
      next: data => this.classes = data,
      error: err => console.error('Erreur lors du chargement des classes', err)
    });
  }

  loadDevoirs(): void {
    this.http.get<Devoir[]>('http://localhost:8000/api/devoirs').subscribe({
      next: data => this.devoirs = data,
      error: err => console.error('Erreur lors du chargement des devoirs', err)
    });
  }

  onSubmit(): void {
    if (this.coursForm.valid) {
      this.http.post('http://localhost:8000/api/cours', this.coursForm.value).subscribe({
        next: () => {
          alert('Cours ajouté avec succès');
          this.coursForm.reset(); // reset form après ajout
        },
        error: err => {
          console.error('Erreur lors de l\'ajout du cours', err);
          alert('Erreur lors de l\'ajout du cours');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs requis');
    }
  }
}
