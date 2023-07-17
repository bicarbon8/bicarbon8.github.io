import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { SplashComponent } from '../splash/splash.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProjectCardsComponent } from '../project-cards/project-cards.component';
import { ProjectCardsService } from '../project-cards/project-cards.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let httpClient: HttpClient;
  let projectCardsService: ProjectCardsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent, SplashComponent, ProjectCardsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    httpClient = TestBed.inject(HttpClient);
    projectCardsService = TestBed.inject(ProjectCardsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
