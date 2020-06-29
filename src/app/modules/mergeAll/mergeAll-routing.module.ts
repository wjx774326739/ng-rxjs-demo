import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { MergeAllComponent } from './mergeAll.component';

const routes: Routes = [
  {
    path: '',
    component: MergeAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeAllRoutingModule { }
