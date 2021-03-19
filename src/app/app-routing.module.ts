import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'e-d-controls', loadChildren: () => import('e-d-controls/src/app/e-d-controls/e-d-controls.module').then((m) => m.EDControlsModule) },
  { path: 'todoTxtWebUi', loadChildren: () => import('todoTxtWebUi/src/app/todo-txt-web-ui/todo-txt-web-ui.module').then((m) => m.TodoTxtWebUiModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
