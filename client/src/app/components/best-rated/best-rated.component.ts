import { Component, Input, OnChanges } from '@angular/core';
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
export class BestRatedComponent implements OnChanges {
  @Input() movies: Movie[] = [];

  bestRatedMovies: Movie[] = [];
  currentIndex: number = 0;

  ngOnChanges(): void {
    this.bestRatedMovies = this.movies.filter(m => m.rating === 5);
    this.currentIndex = 0;
  }

  goPrevious(): void {
    this.currentIndex =
      this.currentIndex === 0
        ? this.bestRatedMovies.length - 1
        : this.currentIndex - 1;
  }

  goNext(): void {
    this.currentIndex =
      this.currentIndex === this.bestRatedMovies.length - 1
        ? 0
        : this.currentIndex + 1;
  }

  encodeMovieName(name: string): string {
    return encodeURIComponent(name);
  }
}
