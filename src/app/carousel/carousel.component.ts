import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { CarouselItemData } from './carousel-item-data';
import { PageData } from '../navigation/page-data';
import { SiteMap } from '../navigation/site-map';
import { ImageItem } from './image-item';
import { ImageService } from './image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public carouselItemData: CarouselItemData[] = [];
  public dataLoaded: boolean = false;
  public width: number;
  public height: number;

  constructor(private _navService: NavigationService, private _imgSvc: ImageService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = this.getAvailableWidth();
    this.height = this.getAvailableHeight();
  }

  ngOnInit(): void {
    this.width = this.getAvailableWidth();
    this.height = this.getAvailableHeight();
    this._navService.getSiteMap().subscribe((smap: SiteMap) => {
      this._createCarouselItemDataArray(smap?.pageGroups
          .map(g => g.pages)
          .reduce((prev, current) => prev.concat(current))
          .filter(p => p.featured));
    });
  }

  private async _createCarouselItemDataArray(pages: Array<PageData>): Promise<void> {
    const carouselItemData: CarouselItemData[] = [];
    const images: ImageItem[] = await this._imgSvc.getImages(this.getAvailableWidth(), this.getAvailableHeight(), pages.length);
    for (var i=0; i<pages.length; i++) {
      let page: PageData = pages[i];
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
        carouselItemData.push(data);
      }
    }
    this.carouselItemData = carouselItemData;
    this.dataLoaded = this.carouselItemData.length > 0;
  }

  getAvailableWidth(): number {
    const width = window.innerWidth - 32;
    return width;
  }

  getAvailableHeight(): number {
    const height = (window.innerHeight * 0.4).toFixed(0);
    return (+height < 300) ? 300 : +height;
  }
}
