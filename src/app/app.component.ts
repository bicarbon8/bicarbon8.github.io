import { Component } from '@angular/core';
import { SiteMap } from 'src/globals/site-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bicarbon8-github-io';

  siteMap(): SiteMap {
    return {
      pages: [
        {title: 'Web Apps', childPages: [
          {title: 'ToDo Txt Web UI', url: '/todoTxtWebUi/'},
          {title: 'Elite:Dangerous Controls', url: '/e-d-controls/'}
        ]},
        {title: 'Game Design', childPages: [
          {title: 'Unity Quadsphere', url: 'https://github.com/bicarbon8/QuadSphere'},
          {title: 'Wargame Sim', url: 'https://github.com/bicarbon8/WarGameSim'},
          {title: 'Space Sim', url: 'https://github.com/bicarbon8/SpaceSim'}
        ]},
        {title: 'Tool Development', childPages: [
          {title: 'Automated Functional Testing (AFT)', url: 'https://www.npmjs.org/package/aft-core'}
        ]}
      ]
    };
  }
}
