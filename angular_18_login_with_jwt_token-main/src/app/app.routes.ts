import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registerpage/register-page.component';
import { ArrendadorComponent } from './pages/arrendador/arrendador.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registerpage/register-page.component'; // Importa RegisterComponent
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
    path: 'ayuda',
    component: AyudaComponent
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
