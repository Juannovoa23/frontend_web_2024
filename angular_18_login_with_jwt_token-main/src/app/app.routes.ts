import { Routes } from '@angular/router';
import { ArrendadorComponent } from './pages/arrendador/arrendador.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registerpage/register-page.component';
import { PerfilArrendatarioComponent } from './pages//perfiles/perfil-arrendatario/perfil-arrendatario.component'; // Nueva importación
import { PerfilArrendadorComponent } from './pages//perfiles/perfil-arrendador/perfil-arrendador.component'; // Nueva importación

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
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'arrendador',
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
