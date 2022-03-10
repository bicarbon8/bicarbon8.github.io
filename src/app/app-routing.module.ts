import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  {
    path: 'e-d-controls',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.edControlsBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.EDControlsModule) 
  },
  {
    path: 'todoTxtWebUi',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.todoTxtBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.TodoTxtWebUiModule) 
  },
  {
    path: 'SpaceSim',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.spaceSimBaseUrl}/remoteEntry.js`,
        exposedModule: './Module'
      })
      .then(m => m.SpaceSimModule) 
  },
  {
    path: 'JsVehicleTrafficSimulator',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: `${environment.trafficSimBaseUrl}/remoteEntry.js`,
      exposedModule: './Module'
    })
    .then(m => m.TrafficSimModule)
  },
  {
    path: 'WargameSimJs',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: `${environment.wargameSimBaseUrl}/remoteEntry.js`,
      exposedModule: './Module'
    })
    .then(m => m.GameModule)
  },
  { path: '**', component: CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
