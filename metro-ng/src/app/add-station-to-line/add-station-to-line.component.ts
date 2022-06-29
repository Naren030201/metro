import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Line } from '../model/line';
import { LineStation } from '../model/line-station';
import { Station } from '../model/station';
import { LineService } from '../service/line.service';

@Component({
  selector: 'app-add-station-to-line',
  templateUrl: './add-station-to-line.component.html',
  styleUrls: ['./add-station-to-line.component.css']
})
export class AddStationToLineComponent implements OnInit {
  line!:Line;
  station!:Station;
  lineStation!:LineStation;
  stations!:Station[];
  selectedStation!:Station;
  searchText: string = "";
  displaySearchResult: boolean = false;
  isActive=true;
  isStart!:boolean;
  showStation:string="";
  result!:Station[];
  getStations!:Station[];
  selectedStations!: Station;
  distance:number=0;
  sequence!:any;
  
  

  constructor(private route:ActivatedRoute, private service:LineService, private router:Router) { }

  ngOnInit(): void {
    
    let lineStationId:any= this.route.snapshot.paramMap.get("lineStationId");
    this.isStart=this.route.snapshot.paramMap.get("start") == "0" ? false : true;
    this.sequence=this.route.snapshot.paramMap.get("start");
    this.displaySearchResult = true;
    this.service.getLineStation(lineStationId).subscribe(
      data=> {
        console.log(data);
        this.lineStation=data;
      }
    )
    let lineId:any= this.route.snapshot.paramMap.get("lineId");
    this.service.getLine(lineId).subscribe(
      data => {
        this.line=data;
        console.log(this.line);
      }
    );

  }

  stationSelect(station : Station){
    console.log(station.name);
      this.showStation=station.name;
      this.selectedStations = station;
      this.searchText=station.name;
      this.getStations=[];
      
  }
 
  getStationName(){
    console.log(this.showStation);
    if(this.showStation.length>=2){
    this.service.getStation(this.showStation).subscribe(
      data=>{
        console.log(data);
        this.getStations=data;
      }
    );
    }
    if(this.showStation.length<2){
      this.getStations=[];

    }
  }

  insertStation(){
    let lineStation:LineStation={
    id: 0,
    line:this.line,
    station: this.selectedStations,
    sequence: this.lineStation.sequence,
    distance: this.distance
    };

    let json:string=JSON.stringify(lineStation);
    this.service.insertStation(json).subscribe(
      data=>{
        this.router.navigate(['manage-station-in-a-line/'+this.line.id]);

      }
    );
  }
  addEndStation(){
    let lineStation:LineStation={
      id: 0,
      line:this.line,
      station: this.selectedStations,
      sequence: this.sequence,
      distance: this.distance
      };
      let json:string=JSON.stringify(lineStation);
    this.service.addEndStation(json).subscribe(
      data=>{
        this.router.navigate(['manage-station-in-a-line/'+this.line.id]);

      }
    );

  }


 



}
