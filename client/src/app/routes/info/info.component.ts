import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component'; // Lägg till import för HeaderComponent
import { FooterComponent } from '../../components/footer/footer.component'; // Lägg till import för FooterComponent



@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  name: string | null = null;
  movie: any = null;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');  // Hämtar id från URL
    if (!this.name) {
      this.error = 'Filmnnamn saknas.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = null;

    const encodedName = this.name; // Ta bort encodeURIComponent
    this.http.get<any>(`http://localhost:8000/api/movies/${encodedName}`)
      .subscribe({
        next: data => {
          this.movie = data;
          this.loading = false;
        },
        error: err => {
          this.error = 'Filmen kunde inte hämtas.';
          this.loading = false;
        }
      });
  }
}
