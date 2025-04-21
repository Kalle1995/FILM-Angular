import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ⬅️ Lägg till detta
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sigen-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // ⬅️ Lägg till FormsModule här
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
