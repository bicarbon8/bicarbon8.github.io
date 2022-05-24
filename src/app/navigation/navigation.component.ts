import { Component, OnInit } from '@angular/core';
import { SiteMap } from './site-map';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public siteMap: SiteMap;
  public dataLoaded: boolean = false;
  
  constructor(private _navService: NavigationService) { }

  ngOnInit(): void {
    this._navService.getSiteMap()
      .subscribe((smap: SiteMap) => {
        this.siteMap = smap;
        this.dataLoaded = true;
      });
  }

  goTo(url: string, target: string = '_self'): void {
    window.open(url, target);
  }
}
