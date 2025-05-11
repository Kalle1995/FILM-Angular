import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importera Router för navigering
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // FormsModule i Angular används för att möjliggöra formulärhantering med tvåvägsbindning och template-driven forms.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Lägg till FontAwesomeModule här om det behövs
import { Movie } from '../../models/movie.model';  // Justera sökvägen om den är annorlunda


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen: boolean = false;
  searchQuery: string = '';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void { // ngOnInit Denna metod körs när komponenten initieras
    // Hämta filmer från API
    fetch('http://localhost:8000/api/movies')
      .then((response) => response.json())
      .then((data: Movie[]) => {
        this.movies = data;
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }

  // Hantera sökfunktionen
  handleSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchQuery = query;

    if (query.length > 0) {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredMovies = [];
    }
  }

  // Toggle meny
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Navigera till filmens detaljer-sida
  navigateToMovie(movieName: string): void {
    this.router.navigate(['/movie', encodeURIComponent(movieName)]);
  }

  // Navigera till olika sidor baserat på länken
   navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
