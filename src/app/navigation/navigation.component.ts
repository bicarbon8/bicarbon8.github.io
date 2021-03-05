import { Component, Input } from '@angular/core';
import { SiteMap } from 'src/globals/site-map';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() siteMap: SiteMap;
}
