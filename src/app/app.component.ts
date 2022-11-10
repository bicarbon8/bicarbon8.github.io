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
        const remove = new Array<string>();
        for (var i = 0; i < el.classList.length; i++) {
            const className = el.classList[i];
            if (className.includes('theme-')) {
                remove.push(className);
            }
        }
        remove.forEach(r => el.classList.remove(r));
        el.classList.add(`theme-${this.theme}`);
    }
}
