import { Routes } from '@angular/router';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';

export const routes: Routes = [
    { path: 'pacientes', component: ListarPacientesComponent },
    { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
    
  ];
