import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Navigation.ServiceService', () => {
  let service: NavigationService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
