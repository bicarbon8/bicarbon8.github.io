import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { CarouselItemData } from './carousel-item-data';
import { PageData } from '../navigation/page-data';
import { PageGroup } from '../navigation/page-group';
import { SiteMap } from '../navigation/site-map';
import { ImageItem } from './image-item';
import { ImageService } from './image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private _pages: PageData[] = [];

  public carouselItemData: CarouselItemData[] = [];
  public dataLoaded: boolean = false;

  constructor(private _navService: NavigationService, private _imgSvc: ImageService) { }

  ngOnInit(): void {
    this._navService.getSiteMap().subscribe((smap: SiteMap) => {
      smap?.pageGroups?.forEach((g: PageGroup) => {
        g?.pages?.forEach((p: PageData) => {
          if (p?.featured) {
            this._pages.push(p);
          }
        })
      });
      this._createCarouselItemDataArray();
    });
  }

  private async _createCarouselItemDataArray(): Promise<void> {
    const carouselItemData: CarouselItemData[] = [];
    const images: ImageItem[] = await this._imgSvc.getImages(window.innerWidth, window.innerHeight, this._pages.length);
    for (var i=0; i<this._pages.length; i++) {
      let page: PageData = this._pages[i];
      let img: ImageItem = images[i];
      if (page) {
        let data: CarouselItemData = {
          imgSrc: img?.download_url || '',
          altTxt: img?.description || img?.author || '',
          active: (i === 0),
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
        carouselItemData.push(data);
      }
    }
    this.carouselItemData = carouselItemData;
    this.dataLoaded = this.carouselItemData.length > 0;
  }
}
