import { TestBed } from '@angular/core/testing';

import { SplashService } from './splash.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SplashService', () => {
  let service: SplashService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(SplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
