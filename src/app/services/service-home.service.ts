import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {
   private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  getClassesInscrit(etudiantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants/${etudiantId}/classesInscrit`);
  }
  getClassesNonInscrit(etudiantId: number):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/etudiants/${etudiantId}/classes-non-associees`);
  }
   getEnseignantsInscrits(etudiantId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants/${etudiantId}/enseignants-inscrits`);
  }
}
