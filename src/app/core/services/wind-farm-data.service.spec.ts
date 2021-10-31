import { TestBed } from '@angular/core/testing';

import { WindFarmDataService } from './wind-farm-data.service';

describe('WindFarmDataService', () => {
  let service: WindFarmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindFarmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
