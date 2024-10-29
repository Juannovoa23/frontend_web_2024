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
  // Lista de botones de "árbol"
  arboles = ['Hacienda Napoles', 'Tranquilandia', 'Finca Los Rosales'];

  // Lista de favoritos que se duplican abajo
  favoritos: string[] = [];

  // Función para agregar un árbol a la lista de favoritos, siempre en la primera posición
  agregarAFavoritos(arbol: string) {
    this.favoritos.unshift(arbol);
  }
}
