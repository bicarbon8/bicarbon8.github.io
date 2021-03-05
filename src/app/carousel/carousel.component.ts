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
        description: 'Inspired by the http://www.todotxt.com project this web app provides a simple web-based user interface for interacting with one\'s todo.txt file.',
        actions: [
          {text: 'Go To App', class: 'btn-primary', onClick: () => window.open('https://rawgit.com/bicarbon8/todoTxtWebUi/master/index.html', '_blank')},
          {text: 'View Code', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/todotxtwebui', '_blank')}
        ]
      },
      {
        imgSrc: './assets/img/GlacierBay_SmallIce.jpg',
        altTxt: 'Irish farmland with mountains in the background',
        title: 'Elite:Dangerous Control Bindings Visualiser',
        description: 'A web application that parses your Elite:Dangerous Control Bindings to display them in an easy to read manner',
        actions: [
          {text: 'View Code', class: 'btn-secondary', onClick: () => window.open('https://github.com/bicarbon8/e-d-controls', '_blank')}
        ]
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
