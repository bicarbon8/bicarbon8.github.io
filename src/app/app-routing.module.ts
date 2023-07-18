import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { WrapperComponent, WrapperData } from './component-wrappers/wrapper.component';

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
    component: WrapperComponent,
    data: {
      remoteEntry: `${environment.todoTxtBaseUrl}/remoteEntry.js`,
      remoteName: 'todoTxtWebUi',
      exposedModule: './loadRemote',
      selector: 'app-root-todo'
    } as WrapperData
    // loadChildren: () => loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: `${environment.todoTxtBaseUrl}/remoteEntry.js`,
    //     exposedModule: './Module'
    //   })
    //   .then(m => m.TodoTxtWebUiModule) 
  },
  {
    path: 'space',
    component: WrapperComponent,
    data: {
      remoteEntry: `${environment.spaceSimBaseUrl}/remoteEntry.js`,
      remoteName: 'SpaceSim',
      exposedModule: './loadRemote',
      selector: 'app-root-space'
    } as WrapperData
    // loadChildren: () => loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: `${environment.spaceSimBaseUrl}/remoteEntry.js`,
    //     exposedModule: './Module'
    //   })
    //   .then(m => m.SpaceSimModule) 
  },
  {
    path: 'traffic',
    component: WrapperComponent,
    data: {
      remoteEntry: `${environment.trafficSimBaseUrl}/remoteEntry.js`,
      remoteName: 'jsVehicleTrafficSimulator',
      exposedModule: './loadRemote',
      selector: 'app-root-traffic'
    } as WrapperData
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
    component: WrapperComponent,
    data: { 
      remoteEntry: `${environment.shortlistItBaseUrl}/remoteEntry.mjs`, 
      remoteName: 'shortlistIt', 
      exposedModule: './ShortlistItModule',
      elementId: 'shortlist-it'
    } as WrapperData
  },
  {
    path: 'quad',
    component: WrapperComponent,
    data: { 
      remoteEntry: `${environment.quadsphereBaseUrl}/remoteEntry.js`, 
      remoteName: 'QuadSphere', 
      exposedModule: './QuadSphereModule',
      elementId: 'quad-sphere'
    } as WrapperData
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
