import { TestBed, inject } from '@angular/core/testing';

import { YetkilendirmeService } from './yetkilendirme.service';

describe('YetkilendirmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YetkilendirmeService]
    });
  });

  it('should be created', inject([YetkilendirmeService], (service: YetkilendirmeService) => {
    expect(service).toBeTruthy();
  }));
});
