import { TestBed, async, inject } from '@angular/core/testing';

import { YoneticiGuardGuard } from './yonetici-guard.guard';

describe('YoneticiGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoneticiGuardGuard]
    });
  });

  it('should ...', inject([YoneticiGuardGuard], (guard: YoneticiGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
