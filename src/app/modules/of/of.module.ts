import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OfComponent } from './of.component';
import { OfRoutesModule } from './of.routing';

@NgModule({
  imports: [
    CommonModule,
    OfRoutesModule,
  ],
  declarations: [OfComponent]
})
export class OfModule { }
