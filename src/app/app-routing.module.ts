import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { ReactComponentWrapper, ReactComponentWrapperData } from './component-wrappers/react-component-wrapper';
import { MainComponent } from './main/main.component';
import { AngularComponentWrapper, AngularComponentWrapperData } from './component-wrappers/angular-component-wrapper';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'elite',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.edControlsBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.EDControlsModule) 
  },
  {
    path: 'todo',
    // component: AngularComponentWrapper,
    // data: {
    //   remoteEntry: `${environment.todoTxtBaseUrl}/remoteEntry.js`,
    //   remoteName: 'todoTxtWebUi',
    //   exposedModule: './Module',
    //   selector: 'app-root-todo'
    // } as AngularComponentWrapperData
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.todoTxtBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.TodoTxtWebUiModule) 
  },
  {
    path: 'space',
    // component: AngularComponentWrapper,
    // data: {
    //   remoteEntry: `${environment.spaceSimBaseUrl}/remoteEntry.js`,
    //   remoteName: 'SpaceSim',
    //   exposedModule: './loadRemote',
    //   selector: 'app-root-space'
    // } as AngularComponentWrapperData
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.spaceSimBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.SpaceSimModule) 
  },
  {
    path: 'traffic',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: `${environment.trafficSimBaseUrl}/remoteEntry.js`,
      remoteName: 'jsVehicleTrafficSimulator',
      exposedModule: './loadRemote',
      selector: 'app-root-traffic'
    } as AngularComponentWrapperData
    // loadChildren: () => loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: `${environment.trafficSimBaseUrl}/remoteEntry.js`,
    //   exposedModule: './Module'
    // })
    // .then(m => m.TrafficSimModule)
  },
  {
    path: 'wargame',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: `${environment.wargameSimBaseUrl}/remoteEntry.js`,
      exposedModule: './Module'
    })
    .then(m => m.GameModule)
  },
  {
    path: 'shortlist',
    component: ReactComponentWrapper,
    data: { 
      remoteEntry: `${environment.shortlistItBaseUrl}/remoteEntry.mjs`, 
      remoteName: 'shortlistIt', 
      exposedModule: './ShortlistItModule',
      elementId: 'shortlist-it'
    } as ReactComponentWrapperData
  },
  {
    path: 'quad',
    component: ReactComponentWrapper,
    data: { 
      remoteEntry: `${environment.quadsphereBaseUrl}/remoteEntry.js`, 
      remoteName: 'QuadSphere', 
      exposedModule: './QuadSphereModule',
      elementId: 'quad-sphere'
    } as ReactComponentWrapperData
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
