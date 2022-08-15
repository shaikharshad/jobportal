import { TestBed } from '@angular/core/testing';

import { DatapassServiceService } from './datapass-service.service';

describe('DatapassServiceService', () => {
  let service: DatapassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
