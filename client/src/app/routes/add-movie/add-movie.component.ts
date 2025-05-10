import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-movie', // tag represnterar komponent
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  formData = { // Definiera objektet formData
    name: '',
    image: '',
    year: '',
    type: 'Action',
    description: '',
    rating: 1
  };

  constructor(private http: HttpClient) {} // ligger den i komponenten för att kunna navända den för att skicka http anrop till servern

  // hantera formulärinlämning
  handleSubmit() {
    this.http.post('http://localhost:8000/api/movies', this.formData).subscribe({
    //subscribe(): Lyssnar på svaret från servern och utför en åtgärd baserat på om det lyckades eller om det uppstod ett fel.
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
