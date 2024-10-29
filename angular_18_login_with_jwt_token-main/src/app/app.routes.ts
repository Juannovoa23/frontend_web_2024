import { Routes } from '@angular/router';
import { ArrendadorComponent } from './pages/arrendador/arrendador.component';
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
    path: 'arrendador',
    component: ArrendadorComponent
  },
  {
    path: 'registerpage', // Agrega la ruta de registro aquí
    component: RegisterComponent
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
