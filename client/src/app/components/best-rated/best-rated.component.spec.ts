import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-best-rated',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './best-rated.component.html',
  styleUrls: ['./best-rated.component.css']
})
export class BestRatedComponent {
encodeMovieName(arg0: string): any|string {
throw new Error('Method not implemented.');
}
  @Input() movies: Movie[] = [];

  currentIndex = 0;

  get bestRatedMovies(): Movie[] {
    return this.movies.filter(movie => movie.rating === 5);
  }

  goPrevious(): void {
    this.currentIndex = this.currentIndex === 0 ? this.bestRatedMovies.length - 1 : this.currentIndex - 1;
  }

  goNext(): void {
    this.currentIndex = this.currentIndex === this.bestRatedMovies.length - 1 ? 0 : this.currentIndex + 1;
  }
}
