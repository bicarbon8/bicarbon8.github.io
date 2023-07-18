import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type WrapperData = {
    remoteEntry: string;
    remoteName: string;
    exposedModule: string;
    selector?: string;
    elementId?: string;
};

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', {read: ElementRef<HTMLDivElement>, static: true})
  vc: ElementRef<HTMLDivElement>;

  public loading: boolean = true;
  public error: boolean = false;
  public errorMessage: string;

  private data: WrapperData;

  constructor(route: ActivatedRoute) { 
    this.data = {...route.snapshot.data} as WrapperData;
  }

  ngAfterContentInit(): void {
    if (this.data.selector) {
      this.vc.nativeElement.innerHTML = `<${this.data.selector}></${this.data.selector}>`;
    }
    if (this.data.elementId) {
      const element = document.createElement('div');
      element.id = this.data.elementId;
      this.vc.nativeElement.appendChild(element);
    }
    
    loadRemoteModule({
      type: 'module',
      remoteEntry: this.data.remoteEntry,
      exposedModule: this.data.exposedModule
    }).then(m => {
      console.log(`loaded module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`);
      this.loading = false;
    }).catch(err => {
      console.error(`unable to load remote module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`, err);
      this.loading = false;
      this.error = true;
      this.errorMessage = err?.message ? err.message : err;
    });
  }
}
