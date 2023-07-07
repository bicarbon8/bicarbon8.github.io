import { TestBed } from '@angular/core/testing';

import { ProjectCardsService } from './project-cards.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectCardsService', () => {
  let service: ProjectCardsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ProjectCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
