import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { IntervalComponent } from './interval.component';

const routes: Routes = [
  {
    path: '',
    component: IntervalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervalRoutingModule { }
