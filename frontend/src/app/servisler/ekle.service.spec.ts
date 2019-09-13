import { TestBed, inject } from '@angular/core/testing';

import { EkleService } from './ekle.service';

describe('EkleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EkleService]
    });
  });

  it('should be created', inject([EkleService], (service: EkleService) => {
    expect(service).toBeTruthy();
  }));
});
