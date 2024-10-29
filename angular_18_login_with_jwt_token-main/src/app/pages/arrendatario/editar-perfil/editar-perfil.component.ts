import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {

  actualizarInformacion(form: HTMLFormElement) {
    // Lógica para actualizar información personal
    console.log('Información personal:', form['value']);
  }

}