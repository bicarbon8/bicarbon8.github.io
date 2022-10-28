import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type ReactComponentWrapperData = {
    remoteEntry: string;
    remoteName: string;
    exposedModule: string;
    elementId: string;
};

@Component({
  template: '<div class="react-component-wrapper" #vc></div>',
})
export class ReactComponentWrapper implements AfterContentInit {
  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef;

  private data: ReactComponentWrapperData;

  constructor(route: ActivatedRoute) { 
    this.data = {...route.snapshot.data} as ReactComponentWrapperData;
  }

  ngAfterContentInit(): void {
    const element = document.createElement('div');
    element.id = this.data.elementId;
    this.vc.nativeElement.appendChild(element);
    
    loadRemoteModule({
        type: 'module',
        remoteEntry: this.data.remoteEntry,
        exposedModule: this.data.exposedModule
    })
    .then(m => console.log(`loaded module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`))
    .catch(err => console.error(`unable to load remote module '${this.data.exposedModule}' from '${this.data.remoteEntry}'`, err));
  }
}
