import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MergeAllRoutingModule } from './mergeAll-routing.module';
import { MergeAllComponent } from './mergeAll.component';

@NgModule({
  imports: [
    CommonModule,
    MergeAllRoutingModule
  ],
  declarations: [MergeAllComponent]
})
export class MergeAllModule { }
