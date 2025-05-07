import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component'; // Lägg till import för HeaderComponent
import { FooterComponent } from '../../components/footer/footer.component'; // Lägg till import för FooterComponent
import { Movie } from '../../models/movie.model';  // Importera Movie-INTERFACE här




@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  name: string | null = null;
  movie: Movie | null = null;  // Typen Movie (interface) eller null
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  // constructor användas för att lägga tjänstet som komponenten behöver
  // ActivatedRoute är en Angular-tjänst som ger information om den aktuella routen (t.ex. parametrar i URL:en)
  // private betyder att variabeln bara kan användas inne i klassen.
  // HttpClient – för att hämta data via HTTP.


  ngOnInit() { // ngOnInit (Livscykelhook)
    this.name = this.route.snapshot.paramMap.get('name');  // Hämtar Namn från URL
    if (!this.name) {
      this.error = 'Filmnnamn saknas.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = null;

    this.http.get<Movie>(`http://localhost:8000/api/movies/${this.name}`) // Gör ett HTTP GET-anrop till API:t och förväntar sig ett objekt av typen Movie.
      .subscribe({ // anropet är asynkront måste vi lyssna på svaret (den liknar promis på ett sätt)
        next: data => { // om filmen hittas spara den och avsluta ladda
          this.movie = data;
          this.loading = false;
        },
        error: err => { // om nåt går fel visa fel meddelande
          this.error = 'Filmen kunde inte hämtas.';
          this.loading = false;
        }
      });
  }
}
