import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';

@NgModule({
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  declarations: [ObservableComponent]
})
export class ObservableModule { }
