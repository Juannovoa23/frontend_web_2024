import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FincaService } from '../../services/finca.service';

@Component({
  standalone: true,
  selector: 'app-reserva',
  templateUrl: './reservar.component.html',
  imports: [FormsModule, NgIf],

  styleUrls: ['./reservar.component.css']
})
export class ReservaComponent implements OnInit {
  finca: any;
  dias: number = 1;

  // Inyecta el servicio aquí
  constructor(private readonly router: Router, @Inject(FincaService) private readonly fincaService: FincaService) {
    this.finca = history.state.finca;

  }

  ngOnInit(): void {
    // Obtener la finca desde la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.finca = navigation.extras.state['finca']; // Acceder a la finca correctamente
      // También puedes guardar la finca en el servicio si es necesario
      this.fincaService.setFinca(this.finca);
    }
  }


  calcularCosto(dias: number): number {
    const costoPorDia = 100; // Define el costo por día
    return dias * costoPorDia;
  }

  pagar() {
    const costoTotal = this.calcularCosto(this.dias);
    alert(`Se ha procesado el pago de ${costoTotal}$ para ${this.finca?.nombre}.`); // Asegúrate de usar 'nombre'
  }
}
