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
  
  constructor(private _navService: NavigationService) { }

  async ngOnInit(): Promise<void> {
    this.siteMap = await this._navService.getSiteMap();
  }

  async goTo(url: string, target: string = '_self'): Promise<void> {
    window.open(url, target);
  }
}
