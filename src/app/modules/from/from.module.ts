import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FromComponent } from './from.component';
import { FromRoutesModule } from './from.routing';

@NgModule({
  imports: [
    CommonModule,
    FromRoutesModule
  ],
  declarations: [FromComponent]
})
export class FromModule { }
