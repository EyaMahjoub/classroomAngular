import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FichierService {
  private apiBaseUrl = 'http://localhost:8000/api/fichier';

  constructor(private http: HttpClient) {}

  uploadFichier(file: File, classeId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    // idClasse dans l'URL
    const url = `${this.apiBaseUrl}/${classeId}`;

    return this.http.post(url, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue est survenue.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Erreur ${error.status} : ${error.error?.error || error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
