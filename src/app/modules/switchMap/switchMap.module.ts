import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwitchMapComponent } from './switchMap.component';
import { SwitchMapRoutesModule } from './switchMap.routing';

@NgModule({
  imports: [
    CommonModule,
    SwitchMapRoutesModule
  ],
  declarations: [SwitchMapComponent]
})
export class SwitchMapModule { }
