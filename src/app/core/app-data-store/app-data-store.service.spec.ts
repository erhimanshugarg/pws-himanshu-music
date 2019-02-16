import { TestBed } from '@angular/core/testing';

import { AppDataStoreService } from './app-data-store.service';

/**
 * AppDataStoreService Unit Testing
 */
describe('AppDataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDataStoreService = TestBed.get(AppDataStoreService);
    expect(service).toBeTruthy();
  });
});
