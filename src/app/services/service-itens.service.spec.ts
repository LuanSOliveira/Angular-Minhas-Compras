import { TestBed } from '@angular/core/testing';

import { ServiceItensService } from './service-itens.service';

describe('ServiceItensService', () => {
  let service: ServiceItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
