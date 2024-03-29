import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: string;

  constructor() {
    this.year = new Date().getUTCFullYear().toString();
  }
}
