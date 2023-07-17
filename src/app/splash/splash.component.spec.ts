import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashComponent } from './splash.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponent);
    httpClient = TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
