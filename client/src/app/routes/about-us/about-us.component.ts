import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';  // Importera HeaderComponent
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],  // Här importeras HeaderComponent
  templateUrl: './about-us.component.html',  // Här refererar vi till HTML-template
  styleUrls: ['./about-us.component.css'],  // Lägg till relativ väg till header-stilarna
})
export class AboutUsComponent {
  title = 'About Us';  // Titeln för About Us-sidan
}
