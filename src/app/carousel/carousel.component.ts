import { Component } from '@angular/core';
import { CarouselItemData } from './carousel-item-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  getItemData(): CarouselItemData[] {
    return [
      {
        imgSrc: './assets/img/Meadowbrook_BicycleWithSunriseInWheel.jpg',
        altTxt: 'bicycle with sunrise in background',
        active: true,
        title: 'ToDo Txt Web UI',
        description: 'Inspired by the http://www.todotxt.com project this web app provides a simple web-based user interface for interacting with one\'s todo.txt file.',
        actions: [
          {text: 'Go To App', class: 'btn-primary', onClick: () => window.open('/todoTxtWebUi/', '_self')},
          {text: 'View Code', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/todotxtwebui', '_blank')}
        ]
      },
      {
        imgSrc: './assets/img/GlacierBay_SmallIce.jpg',
        altTxt: 'Irish farmland with mountains in the background',
        title: 'Elite:Dangerous Control Bindings Visualiser',
        description: 'A web application that parses your Elite:Dangerous Control Bindings to display them in an easy to read manner',
        actions: [
          {text: 'Go To App', class: 'btn-primary', onClick: () => window.open('/e-d-controls/', '_self')},
          {text: 'View Code', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/e-d-controls', '_blank')}
        ]
      },
      {
        imgSrc: './assets/img/Ticknock_Sunrise.jpg',
        altTxt: 'sunrise and mountain in the background',
        title: 'Game Design in Unity and Web',
        description: 'Games and game components created as learning exercises',
        actions: [
          {text: 'Unity Quadsphere', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/QuadSphere', '_blank')},
          {text: 'Spaceship Game', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/SpaceSim', '_blank')},
          {text: 'Wargame', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/WargameSimJs', '_blank')}
        ]
      },
      {
        imgSrc: './assets/img/BallawleyPark_SunriseThroughTrees.jpg',
        altTxt: 'sunrise through cluster of trees',
        title: 'Tool Development',
        description: 'Tools and code libraries developed for test automation or general use',
        actions: [
          {text: 'Automated Functional Testing', class: 'btn-primary', onClick: () => window.open('https://www.npmjs.com/package/aft-core', '_blank')}
        ]
      }
    ];
  }
}
