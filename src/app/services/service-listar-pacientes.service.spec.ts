import { TestBed } from '@angular/core/testing';

import { ServiceListarPacientesService } from './service-listar-pacientes.service';

describe('ServiceListarPacientesService', () => {
  let service: ServiceListarPacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListarPacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
