import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authRecruteurGuard } from './auth-recruteur-guard.guard';

describe('authRecruteurGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authRecruteurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
