import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { CarouselItemData } from './carousel-item-data';
import { PageData } from '../navigation/page-data';
import { PageGroup } from '../navigation/page-group';
import { SiteMap } from '../navigation/site-map';
import { ImageItem } from './image-item';
import { ImageService } from './image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private _pages: PageData[] = [];

  public carouselItemData: CarouselItemData[] = [];
  public dataLoaded: boolean = false;

  constructor(private _navService: NavigationService, private _imgSvc: ImageService, private _route: ActivatedRoute) { }

  get useRemoteImageProvider(): boolean {
    return (this._route.snapshot.queryParamMap.get('useRemote')?.toLowerCase() === 'true') ? true : false;
  }

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
    for (var i=0; i<this._pages.length; i++) {
      let page: PageData = this._pages[i];
      let img: ImageItem = await this._imgSvc.getImage(window.innerWidth, window.innerHeight, this.useRemoteImageProvider);
      if (page) {
        let data: CarouselItemData = {
          imgSrc: img?.download_url || '',
          altTxt: `${img?.description || ''}; ${img?.author || ''}`,
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
