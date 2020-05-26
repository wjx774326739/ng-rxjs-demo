import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { AuditTimeComponent } from './auditTime.component';

const routes: Routes = [
  {
    path: '',
    component: AuditTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTimeRoutingModule { }
