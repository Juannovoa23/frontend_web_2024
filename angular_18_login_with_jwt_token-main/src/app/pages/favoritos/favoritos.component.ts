/*import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavoritosService } from '../services/sevfavoritos/sevfavoritos.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./favoritos.component.css'],
  standalone: true,
})
export class FavoritosComponent {


  favoritos: string[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }
}*/
