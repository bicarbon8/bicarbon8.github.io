import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarouselComponent } from './carousel.component';
import { HttpClient } from '@angular/common/http';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient); // Injecting the HttpClient
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
