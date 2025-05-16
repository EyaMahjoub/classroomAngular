import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Devoir {
  id: number;
  title: string;
  createdAt: string;
  deadline: string;
}

@Component({
  selector: 'app-devoirs',
  templateUrl: './devoirs.component.html',
  styleUrls: ['./devoirs.component.css']
})
export class DevoirsComponent implements OnInit {

  devoirs: Devoir[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  classeId!: number; // la valeur sera assignée à partir de la route

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute // injecte ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.classeId = +idParam; // convertit en nombre
        this.getDevoirs();
      } else {
        this.errorMessage = 'ID de la classe manquant dans l\'URL.';
      }
    });
  }

  getDevoirs(): void {
    this.loading = true;
    this.http.get<Devoir[]>(`http://127.0.0.1:8000/api/classes/${this.classeId}/devoirs`)
      .subscribe({
        next: (data) => {
          this.devoirs = data;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors du chargement des devoirs.';
          this.loading = false;
          console.error(error);
        }
      });
  }

}
