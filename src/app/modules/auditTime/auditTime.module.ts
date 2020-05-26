import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuditTimeRoutingModule } from './auditTime-routing.module';
import { AuditTimeComponent } from './auditTime.component';

@NgModule({
  imports: [
    CommonModule,
    AuditTimeRoutingModule
  ],
  declarations: [AuditTimeComponent]
})
export class AuditTimeModule { }
