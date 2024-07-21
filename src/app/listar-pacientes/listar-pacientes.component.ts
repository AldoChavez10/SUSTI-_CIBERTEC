import { Component, inject, OnInit } from '@angular/core';
import { ServiceListarPacientesService } from '../services/service-listar-pacientes.service';


@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  private pacientesService = inject(ServiceListarPacientesService);
 
  pacientes: any[] = [];

  ngOnInit(): void {
    this.pacientesService.listarpacientes().subscribe((pacientes: any) => {
      this.pacientes = pacientes;
    });
  }

  
}
