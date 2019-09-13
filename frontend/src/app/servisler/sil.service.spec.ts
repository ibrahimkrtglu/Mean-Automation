import { TestBed, inject } from '@angular/core/testing';

import { SilService } from './sil.service';

describe('SilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SilService]
    });
  });

  it('should be created', inject([SilService], (service: SilService) => {
    expect(service).toBeTruthy();
  }));
});
