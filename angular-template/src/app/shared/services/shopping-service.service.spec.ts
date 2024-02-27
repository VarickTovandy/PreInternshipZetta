import { TestBed } from '@angular/core/testing';

import { GundamService } from './shopping-service.service';

describe('ShoppingServiceService', () => {
  let service: GundamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GundamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
