import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'e-d-controls', loadChildren: () => import('e-d-controls/src/app/e-d-controls/e-d-controls.module').then((m) => m.EDControlsModule) },
  { path: 'todoTxtWebUi', loadChildren: () => import('todoTxtWebUi/src/app/todo-txt-web-ui/todo-txt-web-ui.module').then((m) => m.TodoTxtWebUiModule) },
  { path: 'JsVehicleTrafficSimulator', loadChildren: () => import('JsVehicleTrafficSimulator/src/app/traffic-sim/traffic-sim.module').then((m) => m.TrafficSimModule) },
  { path: 'SpaceSim', loadChildren: () => import('SpaceSim/src/app/space-sim/space-sim.module').then((m) => m.SpaceSimModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
