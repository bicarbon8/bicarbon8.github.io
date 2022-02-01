import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { CarouselImageData } from './carousel-image-data';
import { CarouselItemData } from './carousel-item-data';
import { PageData } from '../navigation/page-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public carouselItems: CarouselItemData[];

  private _carouselImages: CarouselImageData[] = [
    {
      imgSrc: './assets/img/Meadowbrook_BicycleWithSunriseInWheel.jpg',
      altTxt: 'bicycle with sunrise in background'
    },
    {
      imgSrc: './assets/img/GlacierBay_SmallIce.jpg',
      altTxt: 'Glacier bay in Iceland'
    },
    {
      imgSrc: './assets/img/Ticknock_Sunrise.jpg',
      altTxt: 'sunrise from Ticknock mountain in Ireland with hills and sunrise in the background'
    },
    {
      imgSrc: './assets/img/BallawleyPark_SunriseThroughTrees.jpg',
      altTxt: 'sunrise through cluster of trees'
    },
    {
      imgSrc: './assets/img/MeadowbrookPitch_Sunrise.jpg',
      altTxt: 'sunrise over a football pitch in South-Dublin'
    },
    {
      imgSrc: './assets/img/SugarLoaf_ZoomX5.jpg',
      altTxt: '5x zoom view of SugarLoaf mountain in Ireland'
    }
  ];
  private _currentSelectionIndex: number = 0;

  constructor(private _navService: NavigationService) { }

  async ngOnInit(): Promise<void> {
    let carouselItems: CarouselItemData[] = [];
    let pages: PageData[] = await this._navService.getFeaturedPages();

    for (var i=0; i<pages.length; i++) {
      let imgData: CarouselImageData = this._getNextImageData();
      let page: PageData = pages[i];
      let data: CarouselItemData = {
        imgSrc: imgData.imgSrc,
        altTxt: imgData.altTxt,
        active: (i == 0) ? true : false,
        title: page.title,
        description: page.description,
        actions: []
      }
      if (page.url) {
        data.actions.push({text: 'Go To App', class: 'btn-primary', onClick: () => window.location.href = page.url});
      }
      if (page.codeSourceUrl) {
        data.actions.push({text: 'View Code', class: 'btn-secondary', onClick: () => window.location.href = page.codeSourceUrl});
      }

      carouselItems.push(data);
    }

    this.carouselItems = carouselItems;    
  }

  private _getNextImageData(): CarouselImageData {
    let imgData: CarouselImageData = this._carouselImages[this._currentSelectionIndex++];
    if (this._currentSelectionIndex > this._carouselImages.length) {
      this._currentSelectionIndex = 0;
    }
    return imgData;
  }
}
