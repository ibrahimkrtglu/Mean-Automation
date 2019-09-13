import { TestBed, async, inject } from '@angular/core/testing';

import { MasterGuardGuard } from './master-guard.guard';

describe('MasterGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterGuardGuard]
    });
  });

  it('should ...', inject([MasterGuardGuard], (guard: MasterGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
