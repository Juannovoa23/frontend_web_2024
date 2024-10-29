import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: string[] = [];

  agregarFavorito(favorito: string) {
    this.favoritos.unshift(favorito);
  }

  obtenerFavoritos() {
    return this.favoritos;
  }
}
