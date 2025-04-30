import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  constructor(private http: HttpClient) { }
  getlistenseignant(): Observable<any> {
    // Utilisation de l'URL complète de l'API
    return this.http.get('http://127.0.0.1:8000/api/enginant/1'); // Ne pas oublier de spécifier l'URL complète
  }
}
