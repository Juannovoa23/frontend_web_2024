import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ayuda',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  comments: string[] = []; // Almacena los comentarios
  newComment: string = ''; // Almacena el nuevo comentario

  // Método para agregar un comentario
  addComment() {
    if (this.newComment.trim()) { // Verifica que no esté vacío
      this.comments.unshift(this.newComment); // Agrega al inicio del array
      this.newComment = ''; // Limpia el campo de entrada
    }
  }
}
