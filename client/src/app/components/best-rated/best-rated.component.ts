import { Component, Input, OnChanges } from '@angular/core'; // input tillåter att komponent tar emot data från förläder
import { CommonModule } from '@angular/common'; // gör vanliga Angular driktiv tillgängliga som *ngIf, *ngFor
import { RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-best-rated',
  standalone: true, // Det betyder att den kan användas utan att behöva en Angular-modul.
  imports: [CommonModule, RouterModule],
  templateUrl: './best-rated.component.html',
  styleUrls: ['./best-rated.component.css']
})
export class BestRatedComponent implements OnChanges {
  @Input() movies: Movie[] = [];

  bestRatedMovies: Movie[] = [];
  currentIndex: number = 0;

  ngOnChanges(): void {
    this.bestRatedMovies = this.movies.filter(movieRating => movieRating.rating === 5); //skapar en ny lista med endast filmer som har rating === 5.
    this.currentIndex = 0; // Startar alltid karusellen på första filmen.
  }

  goPrevious(): void {
    this.currentIndex =
      this.currentIndex === 0     //  vi är på den första filmen
        ? this.bestRatedMovies.length - 1
        : this.currentIndex - 1;
  }

  goNext(): void {
    this.currentIndex =
      this.currentIndex === this.bestRatedMovies.length - 1
        ? 0
        : this.currentIndex + 1;
  }

  encodeMovieName(name: string): string { // Denna funktion från JavaScript konverterar ett strängvärde till ett URL-kompatibelt format.
    return encodeURIComponent(name);
  }
    // Säkerställer att filmens namn fungerar i URL genom att "url-enkoda" det (ersätter mellanslag och specialtecken).
}
