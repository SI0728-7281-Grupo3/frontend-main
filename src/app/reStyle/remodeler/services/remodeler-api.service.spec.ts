import { TestBed } from '@angular/core/testing';

import { RemodelerApiService } from './remodeler-api.service';

describe('RemodelerApiService', () => {
  let service: RemodelerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemodelerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
