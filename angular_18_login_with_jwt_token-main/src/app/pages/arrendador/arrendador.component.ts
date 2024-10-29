import { Component } from '@angular/core';

@Component({
  templateUrl: './arrendador.component.html',
  styleUrls: ['./arrendador.component.css']
})
export class ArrendadorComponent {
  agregarFinca(form: HTMLFormElement) {
    // Lógica para agregar finca
    console.log('Datos de la finca:', form['value']);
  }

  actualizarInformacion(form: HTMLFormElement) {
    // Lógica para actualizar información personal
    console.log('Información personal:', form['value']);
  }
}
