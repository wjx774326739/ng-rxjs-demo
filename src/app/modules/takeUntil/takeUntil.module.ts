import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TakeUntilRoutingModule } from './takeUntil-routing.module';
import { TakeUntilComponent } from './takeUntil.component';

@NgModule({
  imports: [
    CommonModule,
    TakeUntilRoutingModule
  ],
  declarations: [TakeUntilComponent]
})
export class TakeUntilModule { }
