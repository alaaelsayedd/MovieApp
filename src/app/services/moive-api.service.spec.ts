import { TestBed } from '@angular/core/testing';

import { MoiveApiService } from './movie-api.service';

describe('MoiveApiService', () => {
  let service: MoiveApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoiveApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
