import { TestBed, inject } from '@angular/core/testing';

import { GirisService } from './giris.service';

describe('GirisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GirisService]
    });
  });

  it('should be created', inject([GirisService], (service: GirisService) => {
    expect(service).toBeTruthy();
  }));
});
