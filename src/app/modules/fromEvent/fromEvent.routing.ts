import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { FromEventComponent } from './fromEvent.component';

const routes: Routes = [
  {
    path: '',
    component: FromEventComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromEventRoutesModule { }
