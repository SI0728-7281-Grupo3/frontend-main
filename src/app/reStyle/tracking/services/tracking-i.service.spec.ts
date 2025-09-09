import { TestBed } from '@angular/core/testing';

import { TrackingIService } from './tracking-i.service';

describe('TrackingIService', () => {
  let service: TrackingIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
