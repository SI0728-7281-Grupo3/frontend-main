import { TestBed } from '@angular/core/testing';

import { ContracterService } from './contracter.service';

describe('ContracterService', () => {
  let service: ContracterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContracterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
