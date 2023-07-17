import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type AngularComponentWrapperData = {
    remoteEntry: string;
    remoteName: string;
    exposedModule: string;
    selector: string;
};

@Component({
  template: '<div class="angular-component-wrapper" #vc></div>',
})
export class AngularComponentWrapper implements AfterContentInit {
  @ViewChild('vc', {read: ElementRef<HTMLDivElement>, static: true})
  vc: ElementRef<HTMLDivElement>;

  private data: AngularComponentWrapperData;

  constructor(route: ActivatedRoute) { 
    this.data = {...route.snapshot.data} as AngularComponentWrapperData;
  }

  ngAfterContentInit(): void {
    if (this.data.selector) {
      this.vc.nativeElement.innerHTML = `<${this.data.selector}></${this.data.selector}>`;
    }
    
    loadRemoteModule({
      type: 'module',
      remoteEntry: this.data.remoteEntry,
      exposedModule: this.data.exposedModule
    }).then(m => console.log(`loaded module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`))
      .catch(err => console.error(`unable to load remote module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`, err));
  }
}
