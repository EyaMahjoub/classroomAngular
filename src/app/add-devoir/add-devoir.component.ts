import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html'
})
export class AddDevoirComponent {
  devoir = {
    title: '',
    deadline: ''
  };
  message = '';
  success = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Format deadline en 'YYYY-MM-DD HH:mm:ss'
    const formattedDeadline = this.formatDateTime(this.devoir.deadline);

    const payload = {
      title: this.devoir.title,
      deadline: formattedDeadline
    };

    this.http.post('http://localhost:8000/api/devoirs', payload).subscribe({
      next: (res: any) => {
        this.message = res.message;
        this.success = true;
        this.devoir = { title: '', deadline: '' }; // reset form
      },
      error: (err) => {
        this.message = err.error?.error || 'Erreur inconnue';
        this.success = false;
      }
    });
  }

  private formatDateTime(dateStr: string): string {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const MM = this.pad(date.getMonth() + 1);
    const dd = this.pad(date.getDate());
    const hh = this.pad(date.getHours());
    const mm = this.pad(date.getMinutes());
    const ss = this.pad(date.getSeconds());
    return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
