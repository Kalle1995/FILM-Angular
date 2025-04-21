import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';  // Importera Router och RouterModule
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BestRatedComponent } from '../../components/best-rated/best-rated.component';
import { SuggestedComponent } from '../../components/suggested/suggested.component';
import { FieldsetComponent } from '../../components/fieldset/fieldset.component';

import { Movie } from '../../models/movie.model';

// Lägg till ikonerna i biblioteket
library.add(faChevronLeft, faChevronRight);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,  // Lägg till FontAwesomeModule här
    RouterModule,  // För navigation
    HeaderComponent,  // Importera HeaderComponent
    FooterComponent,  // Importera FooterComponent
    BestRatedComponent,  // Importera BestRatedComponent
    SuggestedComponent,  // Importera SuggestedComponent
    FieldsetComponent  // Importera FieldsetComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  bestRatedMovies: Movie[] = [];
  currentIndices: number[] = [0, 0, 0]; // Index för varje genre

  constructor(private http: HttpClient, private router: Router) {}  // Lägg till Router i konstruktoren

  ngOnInit(): void {
    this.http.get<Movie[]>('http://localhost:8000/api/movies')
      .subscribe((data: Movie[]) => {
        this.movies = data;
        this.bestRatedMovies = this.movies.filter(movie => movie.rating === 5);
      });
  }

  // Hantera indexändringar för varje genre
  onIndexChange(genreIndex: number, newIndex: number): void {
    this.currentIndices[genreIndex] = newIndex;
  }

  // Funktion för att navigera till filminfo-sidan
  navigateToMovieInfo(movieName: string): void {
    this.router.navigate(['/movie', movieName]);
  }
}
