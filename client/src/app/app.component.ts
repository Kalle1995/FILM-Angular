import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // För router-outlet och routing

@Component({
  selector: 'app-root',
  standalone: true, // Gör komponenten standalone och inte beronde av en ngModule
  imports: [ RouterModule ], // Importera moduler och komponenter
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {

}
