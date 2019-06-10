import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../stations.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {
  station ;
  constructor(private stationService : StationsService) { }

  ngOnInit() {
    this.station = this.stationService.getUsers();
  }

}
