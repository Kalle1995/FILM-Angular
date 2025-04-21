import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // För *ngIf, *ngFor
import { RouterModule, Routes } from '@angular/router'; // För router-outlet och routing
import { AboutUsComponent } from './routes/about-us/about-us.component'; // Importera AboutUsComponent
import { SigenUpComponent } from './routes/sigen-up/sigen-up.component';  // Importera SigenUpComponent
import { InfoComponent } from './routes/info/info.component';


// Definiera vägar (routes)
const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent }, // Stig till AboutUs-komponenten
  { path: 'sign-up', component: SigenUpComponent },  // Stig till SigenUp-komponenten
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: 'movie/:name', component: InfoComponent },  // Standardväg
];

@Component({
  selector: 'app-root',
  standalone: true, // Gör komponenten standalone
  imports: [CommonModule, RouterModule], // Importera moduler och komponenter
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Min Filmapp';
}
