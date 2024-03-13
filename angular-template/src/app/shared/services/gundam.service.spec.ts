import { TestBed } from '@angular/core/testing';

import { GundamService } from './gundam.service';

describe('GundamService', () => {
  let service: GundamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GundamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
