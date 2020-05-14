import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { FromComponent } from './from.component';

const routes: Routes = [
  {
    path: '',
    component: FromComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromRoutesModule { }
