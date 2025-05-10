import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-fieldset',
  standalone: true,  // Det betyder att den kan användas utan att behöva en Angular-modul.
  imports: [CommonModule, RouterModule],
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent {
  @Input() genre!: string; // !: används för att indikera att den kommer att få ett värde senare, vilket är specifikt för TypeScript för att undvika null eller undefined.
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
      ? this.genreMovies.length - 1
      : this.currentIndex - 1;  // Se till att vi går tillbaka i steg 
    this.indexChange.emit(prevIndex);
    // emit() är en metod på en EventEmitter-instans
    // i Angular som används för att sända ett event eller data från en barnkomponent till en föräldrakomponent.
  }

  // Funktion för att gå till nästa film
  moveToNext() {
    const nextIndex = this.currentIndex + 1 >= this.genreMovies.length
      ? 0
      : this.currentIndex + 1;  // Gå tillbaka till början om vi når slutet
    this.indexChange.emit(nextIndex);  // Skicka indexet till föräldern
  }
}
