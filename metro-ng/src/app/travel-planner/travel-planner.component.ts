import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../model/station';
import { TravelPlannerService } from '../service/travel-planner.service';

@Component({
  selector: 'app-travel-planner',
  templateUrl: './travel-planner.component.html',
  styleUrls: ['./travel-planner.component.css']
})
export class TravelPlannerComponent implements OnInit {
  from:string="";
  to:string="";
  distance: number=0;
  result!: Station[];
  fromStations!: Station[];
  toStations!:Station[];
  selectedFromStation!: Station;
  selectedToStation!: Station;
  stationCount: number=0;

  constructor(private router: Router, private service: TravelPlannerService) { }

  ngOnInit(): void {
  }

  getFromStationName(){
    if(this.from.length>=2){
    this.service.getTravelPlanner(this.from).subscribe(
      data=>{
        this.fromStations=data;
      }
    );
    }
    if(this.from.length<2){
      this.fromStations=[];
    }
  }
  getToStationName(){
    if(this.to.length>=2){
    this.service.getTravelPlanner(this.to).subscribe(
      data=>{
        this.toStations=data;
      }
    );
    }
    if(this.to.length<2){
      this.toStations=[];
    }
  }
  plan(){
    this.service.getPlannerlayout(this.selectedFromStation.id, this.selectedToStation.id).subscribe(
      data=>{
        this.result=data.stations;
        this.stationCount=this.result.length;
        this.distance= data.distance;
      }
    );
  }

  fromStationSelected(station : Station){
    console.log(station.name);
      this.from=station.name;
      this.selectedFromStation = station;
      this.fromStations=[];
  }
  toStationSelected(station : Station){
    this.to=station.name;
      this.selectedToStation = station;
      this.toStations=[];
  }



}
