import { TestBed } from '@angular/core/testing';

import { UsusuarioService } from './ususuario.service';

describe('UsusuarioService', () => {
  let service: UsusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
