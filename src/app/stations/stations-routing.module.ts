import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsSingleComponent } from './stations-single/stations-single.component';

const routes: Routes = [
  {
    path: '',
    component: StationsListComponent
  },
  {
    path: ':station',
    component: StationsSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
