import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsSingleComponent } from './stations-single/stations-single.component';

@NgModule({
  declarations: [StationsListComponent, StationsSingleComponent],
  imports: [
    CommonModule,
    StationsRoutingModule
  ]
})
export class StationsModule { }
