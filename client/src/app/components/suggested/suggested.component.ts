import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

import { Movie } from '../../models/movie.model';  // Assuming you have a Movie model

@Component({
  selector: 'app-suggested',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Import CommonModule and RouterModule
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css'],
})
export class SuggestedComponent {
  @Input() movies: Movie[] = [];

  // Method to encode the movie name for use in the URL
  encodeMovieName(name: string): string {
    return encodeURIComponent(name);
  }
}
