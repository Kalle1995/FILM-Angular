import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [CommonModule, RouterModule],  // FontAwesome import är inte längre nödvändigt
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent {
  @Input() genre!: string;
  @Input() movies: Movie[] = [];
  @Input() currentIndex: number = 0; // Index för att hålla reda på aktuell position i listan

  @Output() indexChange = new EventEmitter<number>(); // Skickar ändring i index

  // Filtrera filmer baserat på genre
  get genreMovies(): Movie[] {
    return this.movies.filter(movie => movie.type === this.genre);
  }

  // Hämta synliga filmer baserat på index
  get visibleMovies(): Movie[] {
    return this.genreMovies.slice(this.currentIndex, this.currentIndex + 3);
  }

  // Funktion för att gå till föregående film
  moveToPrev() {
    const prevIndex = this.currentIndex === 0
      ? this.genreMovies.length - 3
      : this.currentIndex - 3;  // Se till att vi går tillbaka i steg om 3
    this.indexChange.emit(prevIndex);  // Skicka indexet till föräldern
  }

  // Funktion för att gå till nästa film
  moveToNext() {
    const nextIndex = this.currentIndex + 3 >= this.genreMovies.length
      ? 0
      : this.currentIndex + 3;  // Gå tillbaka till början om vi når slutet
    this.indexChange.emit(nextIndex);  // Skicka indexet till föräldern
  }
}
