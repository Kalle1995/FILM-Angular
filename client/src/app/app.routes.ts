import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { AddMovieComponent } from './routes/add-movie/add-movie.component';
import { InfoComponent } from './routes/info/info.component';
import { SigenUpComponent } from './routes/sigen-up/sigen-up.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'sigen-up', component: SigenUpComponent },
  { path: 'movie/:name', component: InfoComponent },
];

export { appRoutes as routes }; // Exportera routes korrekt
