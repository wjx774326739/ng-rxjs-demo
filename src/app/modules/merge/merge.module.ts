import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MergeRoutingModule } from './merge-routing.module';
import { MergeComponent } from './merge.component';

@NgModule({
  imports: [
    CommonModule,
    MergeRoutingModule
  ],
  declarations: [MergeComponent]
})
export class MergeModule { }
