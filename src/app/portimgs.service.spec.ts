import { TestBed } from '@angular/core/testing';

import { PortimgsService } from './portimgs.service';

describe('PortimgsService', () => {
  let service: PortimgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortimgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
