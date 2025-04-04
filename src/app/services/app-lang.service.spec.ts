import { TestBed } from '@angular/core/testing';

import { AppLangService } from './app-lang.service';

describe('AppLangService', () => {
  let service: AppLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
