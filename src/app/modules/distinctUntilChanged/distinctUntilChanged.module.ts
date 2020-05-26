import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DistinctUntilChangedRoutingModule } from './distinctUntilChanged-routing.module';
import { DistinctUntilChangedComponent } from './distinctUntilChanged.component';

@NgModule({
  imports: [
    CommonModule,
    DistinctUntilChangedRoutingModule
  ],
  declarations: [DistinctUntilChangedComponent]
})
export class DistinctUntilChangedModule { }
