import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  formData = {
    name: '',
    image: '',
    year: '',
    type: 'Action',
    description: '',
    rating: 1
  };

  constructor(private http: HttpClient) {}

  handleSubmit() {
    this.http.post('http://localhost:8000/api/movies', this.formData).subscribe({
      next: () => {
        alert('Filmen har lagts till!');
        this.formData = {
          name: '',
          image: '',
          year: '',
          type: 'Action',
          description: '',
          rating: 1
        };
      },
      error: () => {
        alert('Något gick fel, försök igen!');
      }
    });
  }
}
