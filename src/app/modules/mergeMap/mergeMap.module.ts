import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MergeMapRoutingModule } from './mergeMap-routing.module';
import { MergeMapComponent } from './mergeMap.component';

@NgModule({
  imports: [
    CommonModule,
    MergeMapRoutingModule
  ],
  declarations: [MergeMapComponent]
})
export class MergeMapModule { }
