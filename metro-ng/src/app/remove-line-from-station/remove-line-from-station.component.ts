import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Line } from '../model/line';
import { Station } from '../model/station';

@Component({
  selector: 'app-remove-line-from-station',
  templateUrl: './remove-line-from-station.component.html',
  styleUrls: ['./remove-line-from-station.component.css']
})
export class RemoveLineFromStationComponent implements OnInit {

  line!:Line;
  station!:Station;
  stations!:Station[];
  selectedStation!:Station;
  searchText!:string;
  displaySearchResult:boolean=false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("lineId"));
    console.log(this.route.snapshot.paramMap.get("stationId"));
    this.line={id:1,name:"Blue"};
    this.station={id:1,name:"Airport"};
    this.stations=[
      {id:1,name:"AG-DMS"},
      {id:2,name:"Airport"},
      {id:3,name:"Nandhanam"},
      {id:4,name:"Saidapet"},
      {id:5,name:"Little-Mount"},
      {id:6,name:"Thenampet"}
    ];

    this.displaySearchResult=true;

  }

  stationSelected(station:Station) {
    console.log(station);
    this.searchText=station.name;
    this.displaySearchResult=false;
    this.selectedStation=station;
  }

}

