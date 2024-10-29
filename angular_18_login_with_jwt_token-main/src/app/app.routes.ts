import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registerpage/register-page.component';
import { PerfilArrendadorComponent } from './pages//perfiles/perfil-arrendador/perfil-arrendador.component'; // Nueva importación
import { PerfilArrendatarioComponent } from './pages//perfiles/perfil-arrendatario/perfil-arrendatario.component'; // Nueva importación
import { ArrendadorComponent } from './pages/arrendador/arrendador.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ReservaComponent } from './pages/reservar/reservar.component';
/*
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
*/


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent
  },
  {
    path: 'ayuda',
    component: AyudaComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  /*{ path: 'favoritos',
    component: FavoritosComponent

  },*/
  {
    path: 'arrendador',
    component: ArrendadorComponent
  },
  {
    path: 'arrendatario',
    component: ArrendadorComponent
  },
  {
    path: 'registerpage',
    component: RegisterComponent
  },
  {
    path: 'perfil-arrendatario', // Nueva ruta
    component: PerfilArrendatarioComponent
  },
  {
    path: 'perfil-arrendador', // Nueva ruta
    component: PerfilArrendadorComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];
