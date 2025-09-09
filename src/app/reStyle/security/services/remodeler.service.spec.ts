import { TestBed } from '@angular/core/testing';

import { RemodelerService } from './remodeler.service';

describe('RemodelerService', () => {
  let service: RemodelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemodelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
