import { Component, Input } from '@angular/core';
import { SiteMap } from 'src/globals/site-map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() siteMap: SiteMap;
}
