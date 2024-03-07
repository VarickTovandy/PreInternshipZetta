import { TestBed } from '@angular/core/testing';

import { LaptopDataService } from './laptop-data.service';

describe('LaptopDataService', () => {
  let service: LaptopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
