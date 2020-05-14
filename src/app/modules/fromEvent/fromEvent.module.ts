import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FromEventComponent } from './fromEvent.component';
import { FromEventRoutesModule } from './fromEvent.routing';

@NgModule({
  imports: [
    CommonModule,
    FromEventRoutesModule
  ],
  declarations: [FromEventComponent]
})
export class FromEventModule { }
