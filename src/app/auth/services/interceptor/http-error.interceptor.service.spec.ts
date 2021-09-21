import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http-error.interceptor.service';

describe('HttpError.InterceptorService', () => {
  let service: HttpErrorInterceptorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [       {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptorService,
        multi: true,
      }]
    });
    service = TestBed.inject(HttpErrorInterceptorService);
    httpMock = TestBed.get(HttpTestingController);
  });
});
