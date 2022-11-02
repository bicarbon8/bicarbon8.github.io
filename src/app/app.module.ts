import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationService } from './navigation/navigation.service';
import { ImageService } from './carousel/image.service';
import { MainComponent } from './main/main.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    MainComponent,
    ProjectCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NavigationService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
