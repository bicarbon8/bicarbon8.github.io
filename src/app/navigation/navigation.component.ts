import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SiteMap } from './site-map';
import { NavigationService } from './navigation.service';
import { Theme } from '../theme';
import { utils } from '../utils';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public siteMap: SiteMap;
  public dataLoaded: boolean = false;
  public selectedTheme: Theme;
  @Output()
  themeUpdated = new EventEmitter<{theme: Theme}>();
  
  constructor(private _navService: NavigationService) { }

  ngOnInit(): void {
    this.setSavedThemeAsSelected();
    this._navService.getSiteMap()
      .subscribe((smap: SiteMap) => {
        this.siteMap = smap;
        this.dataLoaded = true;
      });
  }

  setSavedThemeAsSelected() {
    const theme = this.getSavedTheme();
    if (theme) {
      const select = document.getElementById('theme-select') as HTMLSelectElement;
      const option = select.querySelector(`[value='${theme}']`) as HTMLOptionElement;
      option.selected = true;
      this.themeUpdated.emit({theme: theme});
    }
  }

  handleThemeChange(event) {
    const select = event.target as HTMLSelectElement;
    const theme: Theme = select.options[select.selectedIndex].value as Theme;
    this.saveTheme(theme);
    this.themeUpdated.emit({theme: theme});
  }

  goTo(url: string, target: string = '_self'): void {
    window.open(url, target);
  }

  getSavedTheme(): Theme {
    return utils.getData('theme');
  }

  saveTheme(theme: Theme): void {
    utils.setData('theme', theme);
  }
}
