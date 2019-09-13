import { TestBed, inject } from '@angular/core/testing';

import { KontrolService } from './kontrol.service';

describe('KontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontrolService]
    });
  });

  it('should be created', inject([KontrolService], (service: KontrolService) => {
    expect(service).toBeTruthy();
  }));
});
