import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';// för Angular direktiv som *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Den gör att man kan använda [(ngModel)] för tvåvägsdatabindning i formuläret.
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sigen-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], //
  templateUrl: './sigen-up.component.html',
  styleUrls: ['./sigen-up.component.css'],
})
export class SigenUpComponent {
  username = '';
  email = '';
  password = '';

  onSubmit() {
    console.log('Registrering:', this.username, this.email, this.password);
  }
}
