import { TestBed, inject } from '@angular/core/testing';

import { ListeleService } from './listele.service';

describe('ListeleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeleService]
    });
  });

  it('should be created', inject([ListeleService], (service: ListeleService) => {
    expect(service).toBeTruthy();
  }));
});
