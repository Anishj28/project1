import { TestBed } from '@angular/core/testing';

import { ShowsdataService } from './showsdata.service';

describe('ShowsdataService', () => {
  let service: ShowsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
