import { Component } from '@angular/core';
import { SiteMap } from 'src/app/globals/site-map';

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
          {title: 'ToDo Txt Web UI', url: '/todoTxtWebUi/', codeSourceUrl: 'https://github.com/bicarbon8/todoTxtWebUi'},
          {title: 'Elite:Dangerous Controls', url: '/e-d-controls/', codeSourceUrl: 'https://github.com/bicarbon8/e-d-controls'}
        ]},
        {title: 'Games / Simulations', childPages: [
          {title: 'Unity Quadsphere', codeSourceUrl: 'https://github.com/bicarbon8/QuadSphere'},
          {title: 'Traffic Sim', url: '/JsVehicleTrafficSimulator/', codeSourceUrl: 'https://github.com/bicarbon8/JsVehicleTrafficSimulator'},
          {title: 'Spaceship Game', codeSourceUrl: 'https://github.com/bicarbon8/SpaceSim'},
          {title: 'War Sim Game', codeSourceUrl: 'https://github.com/bicarbon8/WargameSimJs'}
        ]},
        {title: 'Tool Development', childPages: [
          {title: 'Automated Functional Testing (AFT)', codeSourceUrl: 'https://www.npmjs.org/package/aft-core'}
        ]}
      ]
    };
  }
}
