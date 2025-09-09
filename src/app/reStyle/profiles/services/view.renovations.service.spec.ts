import { TestBed } from '@angular/core/testing';

import { ViewRenovationsService } from './view.renovations.service';

describe('ViewRenovationsService', () => {
  let service: ViewRenovationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRenovationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
