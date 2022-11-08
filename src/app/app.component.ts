import { AfterContentInit, Component } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  public theme: Theme;

  ngAfterContentInit() {
    this.theme ??= 'default';
    this.setTheme();
  }

  onThemeUpdated(event) {
    this.theme = event.theme;
    this.setTheme();
  }

  setTheme() {
    const el = document.getElementById('app-container');
    el.classList.remove('theme-default', 'theme-forest', 'theme-glacier', 'theme-watermelon');
    el.classList.add(`theme-${this.theme}`);
  }
}
