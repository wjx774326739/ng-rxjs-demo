import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { SwitchMapComponent } from './switchMap.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchMapComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchMapRoutesModule { }
