import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListarPacientesService {
 private http = inject (HttpClient)

  listarpacientes() {
    return this.http.get('http://localhost:8090/api/pacientes')
   }
}
