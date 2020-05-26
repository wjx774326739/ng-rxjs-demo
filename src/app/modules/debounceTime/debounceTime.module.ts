import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DebounceTimeRoutingModule } from './debounceTime-routing.module';
import { DebounceTimeComponent } from './debounceTime.component';

@NgModule({
  imports: [
    CommonModule,
    DebounceTimeRoutingModule
  ],
  declarations: [DebounceTimeComponent]
})
export class DebounceTimeModule { }
