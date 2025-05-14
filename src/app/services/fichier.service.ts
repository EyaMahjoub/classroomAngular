import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FichierService {
  private apiUrl = 'http://localhost:8000/api/fichier';

  constructor(private http: HttpClient) {}

  uploadFichier(file: File, classeId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('classeId', classeId.toString()); // ce nom doit correspondre à Symfony

    return this.http.post(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue est survenue.';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur ${error.status} : ${error.error?.error || error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
