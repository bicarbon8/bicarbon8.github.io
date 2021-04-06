import { Component, Input } from '@angular/core';
import { SiteMap } from 'src/app/globals/site-map';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() siteMap: SiteMap;

  async goTo(url: string): Promise<void> {
    let target: string = (url.startsWith('http')) ? '_blank' : '_self';
    window.open(url, target);
  }
}
