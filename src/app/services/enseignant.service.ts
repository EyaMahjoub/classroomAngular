import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = 'http://localhost:8000/api';  // URL de base

  constructor(private http: HttpClient) { }

  // Récupérer la liste des enseignants (exemple avec id=1)
  getlistenseignant(): Observable<any> {
    return this.http.get(`${this.baseUrl}/enseignant/1/classes`);
  }

  // Récupérer la liste des étudiants d'un enseignant (exemple avec id=1)
  getlistetudiant(): Observable<any> {
    return this.http.get(`${this.baseUrl}/enseignants/1/etudiants`);
  }

  // Récupérer la liste des cours (route non précisée dans le backend, à vérifier)
  getlistcours(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listeCours/1`);
  }

  getEtudiantsAndClasseDetails(enseignantId: number, classeId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/enseignant/${enseignantId}/classes/${classeId}/etudiants`);
  }
// Ajouter une classe (POST)
addClasse(classeData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/addClasse`, classeData);
}
// Récupérer les cours liés à une classe par son ID
getCoursParClasse(classeId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/classes/${classeId}/cours`);
}
getCommentairesParClasse(classeId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/classe/${classeId}/commentaires`);
}

 

}
