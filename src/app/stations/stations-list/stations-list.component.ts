import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../stations.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {
  stations ;
  constructor(private stationService : StationsService) { }
  pageActual : number = 1;
  totalStation: number = 0 ;
  ngOnInit() {
   this.getStationPerPage(this.pageActual);
  }
  getStationPerPage(page : number){
    this.stationService.getStations(page).subscribe(data=>{
      this.stations = data['content'];
      this.totalStation = data['totalElements'];
    },(error)=>{
      console.log(error.error.message);
    });
  }
  pageChanged(event){
  this.pageActual=event;
  this.stations = this.getStationPerPage(this.pageActual);

}
}
