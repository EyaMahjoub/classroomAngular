import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor( private http:HttpClient) { }
  getClassesEtudiant(id: number) {
    return this.http.get<any[]>(`http://localhost:8000/etudiants/${id}/classes`);
  }
  getCoursParClasse(idClasse: number) {
    return this.http.get<any[]>(`http://localhost:8000/classes/${idClasse}/cours`);
  }
  getEnseignant(idClasse: number) {
    return this.http.get<any[]>(`http://localhost:8000/enseignant/${idClasse}`);
  }
  getEtudiant(idClasse:number){
    return this.http.get<any[]>(`http://localhost:8000/classes/${idClasse}`)
  }
}
