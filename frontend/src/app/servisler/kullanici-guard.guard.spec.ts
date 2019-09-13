import { TestBed, async, inject } from '@angular/core/testing';

import { KullaniciGuardGuard } from './kullanici-guard.guard';

describe('KullaniciGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KullaniciGuardGuard]
    });
  });

  it('should ...', inject([KullaniciGuardGuard], (guard: KullaniciGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
