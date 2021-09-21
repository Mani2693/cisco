import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetch.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../../auth/services/token.service';

describe('FetchService', () => {
  let service: FetchService;
  let mockFetchService = jasmine.createSpyObj("TokenService", ["getStoreToken"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
