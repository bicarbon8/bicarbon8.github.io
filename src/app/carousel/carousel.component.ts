import { Component, OnInit } from '@angular/core';
import { ItemData } from './item-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  getItemData(): ItemData[] {
    return [
      {
        imgSrc: './assets/img/Meadowbrook_BicycleWithSunriseInWheel.jpg',
        altTxt: 'bicycle with sunrise in background',
        active: true,
        title: 'ToDo Txt Web UI',
        description: 'An extention to the http://www.todotxt.com project providing a rich web user interface for interacting with one\'s todo.txt file.',
        actionPrimaryTxt: 'Go To App',
        actionSecondaryTxt: 'View Code'
      },
      {
        imgSrc: './assets/img/GlacierBay_SmallIce.jpg',
        altTxt: 'Irish farmland with mountains in the background',
        title: 'Elite Dangerous Control Bindings Visualiser',
        description: 'A web application that parses your Elite Dangerous Bindings to display controls in an easy to read way'
      },
      {
        imgSrc: './assets/img/Ticknock_Sunrise.jpg',
        altTxt: 'sunrise and mountain in the background',
        title: 'Game Design in Unity and Web',
        description: 'Games and game components created as learning exercises'
      }
    ];
  }
}
