import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./favoritos.component.css'],
  standalone: true,
})
export class FavoritosComponent {
  arboles = ['Hacienda Napoles', 'Tranquilandia', 'Finca Los Rosales'];
  favoritos: string[] = [];

  agregarAFavoritos(arbol: string) {
    if (!this.favoritos.includes(arbol)) {
      this.favoritos.unshift(arbol);
    }
  }
}
