import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  {
    path: 'e-d-controls',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://bicarbon8.github.io/e-d-controls/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.EDControlsModule) 
  },
  {
    path: 'todoTxtWebUi',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://bicarbon8.github.io/todoTxtWebUi/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.TodoTxtWebUiModule) 
  },
  {
    path: 'SpaceSim',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://bicarbon8.github.io/SpaceSim/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.SpaceSimModule) 
  },
  { path: '**', component: CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
