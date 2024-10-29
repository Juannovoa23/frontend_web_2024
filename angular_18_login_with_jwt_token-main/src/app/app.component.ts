import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { EditarPerfilComponent } from "./pages/arrendatario/editar-perfil/editar-perfil.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditarPerfilComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige aquí
})
export class AppComponent {
  title = 'angular_18_login_with_jwt_token';
}

