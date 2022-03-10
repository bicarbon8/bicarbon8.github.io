import { Injectable } from '@angular/core';
import { PageData } from './page-data';
import { PageGroup } from './page-group';
import { SiteMap } from './site-map';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _siteMap: SiteMap;

  constructor() {
    this._siteMap = {
      pageGroups: [{
        title: 'Web Apps', 
        pages: [{
            title: 'ToDo Txt Web UI', 
            description: 'Inspired by the http://www.todotxt.com project this web app provides a simple web-based user interface for interacting with one\'s todo.txt file.',
            url: 'todoTxtWebUi/', 
            codeSourceUrl: 'https://github.com/bicarbon8/todoTxtWebUi',
            featured: true
          }, {
            title: 'Elite:Dangerous Controls',
            description: 'A web application that parses your Elite:Dangerous Control Bindings to display them in an easy to read manner',
            url: 'e-d-controls/',
            codeSourceUrl: 'https://github.com/bicarbon8/e-d-controls',
            featured: true
          }]}, {
        title: 'Games / Simulations', 
        pages: [{
            title: 'Unity Quadsphere',
            codeSourceUrl: 'https://github.com/bicarbon8/QuadSphere',
            featured: false
          }, {
            title: 'Traffic Sim',
            url: 'JsVehicleTrafficSimulator',
            codeSourceUrl: 'https://github.com/bicarbon8/JsVehicleTrafficSimulator',
            featured: false,
          }, {
            title: 'Spaceship Game',
            description: 'side-scrolling space combat game written using the PhaserJs framework',
            url: 'SpaceSim/', 
            codeSourceUrl: 'https://github.com/bicarbon8/SpaceSim',
            featured: true
          }, {
            title: 'War Sim Game',
            url: 'WargameSimJs/',
            codeSourceUrl: 'https://github.com/bicarbon8/WargameSimJs',
            featured: false
          }]}, {
        title: 'Tool Development', 
        pages: [{
            title: 'Automated Functional Testing (AFT)',
            description: 'an extensible test framework written in Typescript for performing Functional / End-2-End testing of UI and API components',
            codeSourceUrl: 'https://www.npmjs.org/package/aft-core',
            featured: true
        }]}
      ]
    };
  }

  async getSiteMap(): Promise<SiteMap> {
    return this._siteMap;
  }

  async getFeaturedPages(): Promise<PageData[]> {
    let pages: PageData[] = [];
    for (var i=0; i<this._siteMap.pageGroups.length; i++) {
      let group: PageGroup = this._siteMap.pageGroups[i];
      for (var j=0; j<group.pages.length; j++) {
        let page: PageData = group.pages[j];
        if (page.featured) {
          pages.push(page);
        }
      }
    }
    return pages;
  }
}
