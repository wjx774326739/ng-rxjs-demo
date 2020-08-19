import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntervalRoutingModule } from './interval-routing.module';
import { IntervalComponent } from './interval.component';

@NgModule({
  imports: [
    CommonModule,
    IntervalRoutingModule,
  ],
  declarations: [IntervalComponent]
})
export class IntervalModule { }
